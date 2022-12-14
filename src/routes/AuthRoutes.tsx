import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import Confirm from '../views/Confirm';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import {ActivityIndicator, View} from 'react-native';
import TabRoutes from './TabRoutes';
import UserProvider from '../contexts/UserProvider';
import useUser from '../hooks/user';
import useStartApp from '../hooks/startApp';
import useNotification from '../hooks/notification';
import messaging from '@react-native-firebase/messaging';

export type StackParams = {
  app: undefined;
  signIn: undefined;
  signUp: undefined;
  confirm: {
    email: string;
    password: string;
  };
};

const AuthRoutes: FC = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const {user, setUser, checkUser} = useUser();
  const {getInvites, getFolders} = useStartApp();
  const {getPush, createChanel} = useNotification();
  useEffect(() => {
    checkUser();
    createChanel();
  }, []);

  useEffect(() => {
    if (user != undefined) {
      getInvites(user.attributes?.sub!);
      getFolders(user.attributes?.sub!);
      messaging().onMessage(message => getPush(message, user));
      messaging().setBackgroundMessageHandler(message =>
        getPush(message, user),
      );
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
              <Stack.Group
                screenOptions={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                }}>
                <Stack.Screen name="confirm" component={Confirm} />
              </Stack.Group>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default AuthRoutes;
