import React, {FC} from 'react';
import {Button, TextInput, View} from 'react-native';
import useInput from '../hooks/input';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const Confirm: FC = () => {
  const code = useInput();

  const {navigate} = useNavigation();
  const {params} = useRoute();

  const confirmHandler = async () => {
    try {
      await Auth.confirmSignUp(params.email, code.value);
      navigate('signIn', {email: params.email});
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <View>
      <TextInput {...code} placeholder="Input your confirm code" />
      <Button title="Confirm" onPress={confirmHandler} />
    </View>
  );
};

export default Confirm;
