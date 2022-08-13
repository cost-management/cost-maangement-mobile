import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutLeft,
} from 'react-native-reanimated';

interface CardProps {
  deleteCard: (index: string) => void;
  text: string;
  index: string;
}

const AnimatedTouchableNativeFeedback = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);

const Card: FC<CardProps> = ({text, deleteCard, index}) => {
  return (
    <Animated.View
      style={style.container}
      entering={LightSpeedInLeft}
      exiting={LightSpeedOutLeft}
      layout={Layout.springify()}>
      <AnimatedTouchableNativeFeedback
        style={{
          width: 300,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => deleteCard(index)}>
        <Text>{text}</Text>
      </AnimatedTouchableNativeFeedback>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 300,
    marginVertical: 10,
    backgroundColor: 'grey',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
