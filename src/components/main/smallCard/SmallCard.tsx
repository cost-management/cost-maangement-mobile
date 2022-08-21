import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import style from './style';

interface SmallCardProps {
  styles?: object;
  x: SharedValue<number>;
}

const SmallCard: FC<SmallCardProps> = ({styles, x}) => {
  const rStyle = useAnimatedStyle(() => ({transform: [{translateX: x.value}]}));

  return (
    <Animated.View style={[style.container, styles, rStyle]}>
      <Text>Card</Text>
    </Animated.View>
  );
};

export default SmallCard;
