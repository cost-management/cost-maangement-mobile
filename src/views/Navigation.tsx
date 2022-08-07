import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import Confirm from './Confirm';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {useState} from 'react';
import {Auth} from 'aws-amplify';
import {ActivityIndicator, View} from 'react-native';

export type StackParams = {
  main: undefined;
  signIn: {
    email: string;
  };
  signUp: undefined;
  confirm: {
    email: string;
  };
};

const Navigation: FC = () => {
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
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="main"
            component={() => <Main setUser={setUser} />}
          />
        ) : (
          <>
            <Stack.Screen
              name="signIn"
              component={() => <SignIn setUser={setUser} />}
            />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="confirm" component={Confirm} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
