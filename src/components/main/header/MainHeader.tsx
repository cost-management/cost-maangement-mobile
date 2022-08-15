import {Auth} from 'aws-amplify';
import React, {FC, useContext} from 'react';
import {View} from 'react-native';
import {UserContext} from '../../../contexts/UserProvider';
import CircleButton from '../../ui/circleButton/CircleButton';
import {style} from './style';

const MainHeader: FC = () => {
  const {setUser} = useContext(UserContext);
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const graphHandler = () => {};

  return (
    <View style={style.container}>
      <View style={style.costs} />
      <View style={style.buttonsContainer}>
        <CircleButton text="-" buttonHandler={signOutHandler} />
        <CircleButton text="i" buttonHandler={graphHandler} />
      </View>
    </View>
  );
};

export default MainHeader;
