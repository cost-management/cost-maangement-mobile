import {Auth} from 'aws-amplify';
import React, {FC} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
// import {GoogleSignin} from 'react-native-google-signin';
import {StackParams} from './Navigation';
import FormSignIn from '../components/FormSignIn';
interface SignInProps {
  setUser: any;
}

const SignIn: FC<SignInProps> = ({setUser}) => {
  const {params} = useRoute<RouteProp<StackParams, 'signIn'>>();
  const signInHandler = async (email: string, password: string) => {
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <FormSignIn
      handlerSubmit={signInHandler}
      email={params?.email ? params?.email : ''}
    />
  );
};
export default SignIn;
