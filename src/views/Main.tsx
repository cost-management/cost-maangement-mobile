import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import CardContainer from '../components/main/cardContainer/CardContainer';
import MainHeader from '../components/main/header/MainHeader';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_BOTTOM,
} from '../constants/styleConstants';

const Main: FC = () => {
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
