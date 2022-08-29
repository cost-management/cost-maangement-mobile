import {Auth} from 'aws-amplify';
import {ICognitoUser} from '../models/Auth';
import React, {FC, useContext} from 'react';

import FormSignIn from '../components/auth/formSignIn/FormSignIn';
import {UserContext} from '../contexts/UserProvider';

const SignIn: FC = () => {
  const {setUser} = useContext(UserContext);

  const signInHandler = async (email: string, password: string) => {
    try {
      const user: ICognitoUser = await Auth.signIn(email, password);
      setUser(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return <FormSignIn handlerSubmit={signInHandler} />;
};
export default SignIn;
