import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import CardContainer from '../components/main/cardContainer/CardContainer';
import MainHeader from '../components/main/header/MainHeader';

const Main: FC = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <CardContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default Main;
