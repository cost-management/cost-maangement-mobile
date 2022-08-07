import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {Auth} from 'aws-amplify';

interface MainProps {
  setUser: any;
}

const Main: FC<MainProps> = ({setUser}) => {
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
      <Button title="SignOut" onPress={signOutHandler} />
    </View>
  );
};

export default Main;
