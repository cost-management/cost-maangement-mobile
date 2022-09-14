import React, {
  FC,
  ForwardedRef,
  forwardRef,
  Ref,
  RefObject,
  useEffect,
} from 'react';
import {Text, Animated, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import style from './style';

interface TransactionRightButtonProps {
  dragX: Animated.AnimatedInterpolation;
  deleteHandler: () => void;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const TransactionRightButton = forwardRef<
  Swipeable,
  TransactionRightButtonProps
>(({dragX, deleteHandler}, ref) => {
  const trans = dragX.interpolate({
    inputRange: [-70, 0],
    outputRange: [0, 70],
  });
  return (
    <AnimatedTouchableOpacity
      onPress={() => {
        deleteHandler();
      }}
      style={[
        {
          transform: [{translateX: trans}],
        },
        style.container,
      ]}>
      <Text style={style.text}>Видалити</Text>
    </AnimatedTouchableOpacity>
  );
});

export default TransactionRightButton;
