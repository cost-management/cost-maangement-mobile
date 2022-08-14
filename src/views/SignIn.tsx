import {Auth} from 'aws-amplify';
import {ICognitoUser} from '../models/Auth';
import React, {FC} from 'react';

import FormSignIn from '../components/FormSignIn';
interface SignInProps {
  setUser: any;
}

const SignIn: FC<SignInProps> = ({setUser}) => {

  const signInHandler = async (email: string, password: string) => {
    try {
      const user : ICognitoUser = await Auth.signIn(email, password);
      setUser(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return <FormSignIn handlerSubmit={signInHandler} />;
};
export default SignIn;
