import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Animated, {
  add,
  Extrapolate,
  interpolate,
  Layout,
  LightSpeedInLeft,
  LightSpeedOutLeft,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {style} from './style';
import {CARD_HEIGHT, SCREEN_WIDTH} from '../../../constans/styleConstants';
import {useDerivedValue} from 'react-native-reanimated';

interface CardProps {
  deleteCard: (index: string) => void;
  text: string;
  index: string;
  id: number;
  y: Animated.SharedValue<number>;
}

const AnimatedTouchableNativeFeedback = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);

const getBackgroundColor = (text: string) => {
  switch (text) {
    case 'card0':
      return {backgroundColor: 'red'};
    case 'card1':
      return {backgroundColor: 'blue'};
    case 'card2':
      return {backgroundColor: 'green'};
    case 'card3':
      return {backgroundColor: 'pink'};
    case 'card4':
      return {backgroundColor: 'grey'};
    case 'card5':
      return {backgroundColor: 'yellow'};
    case 'card6':
      return {backgroundColor: 'purpure'};
  }
};

const Card: FC<CardProps> = ({text, deleteCard, index, id, y}) => {
  const yInterpolate = useDerivedValue(() =>
    interpolate(
      y.value,
      [0, id * CARD_HEIGHT],
      [0, -id * CARD_HEIGHT],
      Extrapolate.CLAMP,
    ),
  );

  const translateY = useDerivedValue(() => y.value + yInterpolate.value);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const exiting = values => {
    'worklet';
    const animations = {
      opacity: withTiming(0, {duration: 12000}),
    };
    const initialValues = {
      opacity: 1,
    };
    return {
      initialValues,
      animations,
    };
  };

  return (
    <Animated.View
      style={[style.container, {zIndex: id}, getBackgroundColor(text)]}
      entering={LightSpeedInLeft}
      exiting={exiting}>
      <AnimatedTouchableNativeFeedback
        style={style.textContainer}
        onPress={() => deleteCard(index)}>
        <Text>{text}</Text>
      </AnimatedTouchableNativeFeedback>
    </Animated.View>
  );
};

export default Card;
