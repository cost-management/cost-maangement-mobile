import React, {FC} from 'react';
import {Button, View} from 'react-native';
import MainHeader from '../components/main/header/MainHeader';

const Main: FC = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader />
    </View>
  );
};

export default Main;
