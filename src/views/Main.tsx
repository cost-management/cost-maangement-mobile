import React, {FC, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import CardContainer from '../components/main/cardContainer/CardContainer';
import MainHeader from '../components/main/header/MainHeader';
import messaging from '@react-native-firebase/messaging';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_BOTTOM,
} from '../constants/styleConstants';

const Main: FC = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('massage', remoteMessage);
    });

    return unsubscribe;
  }, []);
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={styles.container}>
      <MainHeader />
      <CardContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingBottom: PADDING_BOTTOM,
  },
});
export default Main;
