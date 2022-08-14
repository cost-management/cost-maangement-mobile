
import React, {FC, useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {Auth} from 'aws-amplify';
import {UserContext} from '../contexts/UserProvider';
import CardContainer from '../components/cardContainer/CardContainer';

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
    <View style={{flex: 1}}>
      <Button title="SignOut" onPress={signOutHandler} />
      <CardContainer />
    </View>
  );
};

export default Main;
