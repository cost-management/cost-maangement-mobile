import React, {FC} from 'react';
import {Button, TextInput, View} from 'react-native';
import useInput from '../hooks/input';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const SignUp: FC = () => {
  const email = useInput();
  const password = useInput();

  const {navigate} = useNavigation();

  const signupHandler = async () => {
    try {
      const {user} = await Auth.signUp({
        username: email.value,
        password: password.value,
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      navigate('confirm', {email: email.value});
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <View>
      <TextInput {...email} placeholder="Input your email" />
      <TextInput {...password} placeholder="Input your password" />
      <Button title="SignUp" onPress={signupHandler} />
    </View>
  );
};

export default SignUp;
