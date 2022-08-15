import React, {FC, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import Animated, {
  FadeIn,
  LightSpeedInLeft,
  withTiming,
} from 'react-native-reanimated';
import CardContainer from '../components/main/cardContainer/CardContainer';
import MainHeader from '../components/main/header/MainHeader';
import {withSpring} from 'react-native-reanimated';

const Main: FC = () => {
  const [cards, setCards] = useState([]);

  const entering = values => {
    'worklet';
    const animations = {
      transform: [
        {rotate: withTiming('0deg', {duration: 4000})},
        {scale: withTiming(1, {duration: 3500})},
      ],
    };
    const initialValues = {
      transform: [{rotate: '90deg'}, {scale: 0.5}],
    };
    return {animations, initialValues};
  };

  return (
    <View style={{flex: 1}}>
      <MainHeader />
      {/* <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          {cards.map(card => (
            <Animated.View
              entering={entering}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: 'red',
              }}>
              <Text>{card}</Text>
            </Animated.View>
          ))}
        </ScrollView>
        <Button
          title="Add"
          onPress={() => setCards([Date.now().toString()].concat(cards))}
        />
      </View> */}
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
