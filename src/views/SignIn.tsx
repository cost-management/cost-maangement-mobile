import {Auth} from 'aws-amplify';
import {ICognitoUser} from '../models/Auth';
import React, {FC, useContext, useEffect, useState} from 'react';

import FormSignIn from '../components/auth/formSignIn/FormSignIn';
import {UserContext} from '../contexts/UserProvider';
import messaging from '@react-native-firebase/messaging';
import useNotification from '../hooks/notification';
const SignIn: FC = () => {
  const {user, setUser} = useContext(UserContext);

  const {signIn} = useNotification();

  const signInHandler = async (email: string, password: string) => {
    try {
      const user: ICognitoUser = await Auth.signIn(email, password);
      await signIn(user);
      setUser(user);
    } catch (error) {
      console.log(email);
      console.log('error signing in', error);
    }
  };

  return <FormSignIn handlerSubmit={signInHandler} />;
};
export default SignIn;
