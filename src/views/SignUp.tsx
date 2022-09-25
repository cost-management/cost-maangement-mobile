import React, {FC} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import FormSignUp from '../components/auth/formSignUp/FormSignUp';
import {StackParams} from '../routes/AuthRoutes';
import useNotification from '../hooks/notification';
const SignUp: FC = () => {
  const {navigate} = useNavigation<NavigationProp<StackParams, 'signUp'>>();

  const {signUp} = useNotification();

  const signUpHandler = async (email: string, password: string) => {
    try {
      const token = await signUp();
      console.log(token);
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          'custom:token': token,
        },
      });
      navigate('confirm', {email, password});
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return <FormSignUp signUpHandler={signUpHandler} />;
};

export default SignUp;
