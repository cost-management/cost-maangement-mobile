import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import Confirm from '../views/Confirm';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import {useState} from 'react';
import {Auth} from 'aws-amplify';
import {ActivityIndicator, View} from 'react-native';
import TabRoutes from './TabRoutes';
import UserProvider from '../contexts/UserProvider';

export type StackParams = {
  app: undefined;
  signIn: {
    email: string;
  };
  signUp: undefined;
  confirm: {
    email: string;
  };
};

const AuthRoutes: FC = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const [user, setUser] = useState<any>(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (user === undefined) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <UserProvider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({route}) => ({
            headerShown: route.name === 'app' ? false : true,
          })}>
          {user ? (
            <Stack.Screen name="app" component={TabRoutes} />
          ) : (
            <>
              <Stack.Screen name="signIn" component={SignIn} />
              <Stack.Screen name="signUp" component={SignUp} />
              <Stack.Screen name="confirm" component={Confirm} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default AuthRoutes;
