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
import useUser from '../hooks/user';
import useStartApp from '../hooks/startApp';

export type StackParams = {
  app: undefined;
  signIn: undefined;
  signUp: undefined;
  confirm: {
    email: string;
  };
};

const AuthRoutes: FC = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const {user, setUser, checkUser} = useUser();
  const {getInvites, getFolders} = useStartApp();
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (user != undefined) {
      getInvites(user.attributes?.sub!);
      getFolders(user.attributes?.sub!);
    }
  }, [user]);

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
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}>
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
