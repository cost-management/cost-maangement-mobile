import React, {FC} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {StackParams} from './Navigation';
import FormSignUp from '../components/FormSignUp';

const SignUp: FC = () => {
  const {navigate} = useNavigation<NavigationProp<StackParams, 'signUp'>>();

  const signUpHandler = async (email: string, password: string) => {
    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      navigate('confirm', {email: email});
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return <FormSignUp signUpHandler={signUpHandler} />;
};

export default SignUp;
