import React, {FC, useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {Auth} from 'aws-amplify';
import {UserContext} from '../contexts/UserProvider';

const Main: FC = () => {
  const {setUser} = useContext(UserContext);
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View>
      <Text>Hello</Text>
      <Button title="SignOut" onPress={signOutHandler} />
    </View>
  );
};

export default Main;
