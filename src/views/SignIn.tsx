import {Auth} from 'aws-amplify';
import React, {FC} from 'react';
import {Button, TextInput, View} from 'react-native';
import useInput from '../hooks/input';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GoogleSignin} from 'react-native-google-signin';
interface SignInProps {
  setUser: any;
}

const SignIn: FC<SignInProps> = ({setUser}) => {
  const {params} = useRoute();
  const email = useInput(params?.email);
  const password = useInput();
  const {navigate} = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '557365716832-cr1k0r9l8sodd2aibo60kgpjqprq5e7i.apps.googleusercontent.com',
    scopes: ['openid', 'email', 'profile'],
  });
  const signInHandler = async () => {
    try {
      const {user} = await Auth.signIn(email.value, password.value);
      setUser({hello: 'hello'});
    } catch (error) {
      console.log('error signing in', error);
    }
  };
  const signUpHandler = () => navigate('signUp');
  const googleHandler = async () => {
    // GoogleSignin.signIn().then(userinfo => {
    //   console.log(userinfo);
    // });
    //@ts-ignore
    const response = await Auth.federatedSignIn({provider: 'google'});
    console.log(response);
  };

  return (
    <View>
      <TextInput {...email} placeholder="Input your email" />
      <TextInput {...password} placeholder="Input your password" />
      <Button title="SignIn" onPress={signInHandler} />
      <Button title="SignUp" onPress={signUpHandler} />
      <Button title="Google" onPress={googleHandler} />
    </View>
  );
};
export default SignIn;
