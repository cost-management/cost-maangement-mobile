import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';

interface CircleButtonProps {
  buttonHandler: Function;
  text: string;
  radius?: number;
  styles?: object;
}

const CircleButton: FC<CircleButtonProps> = ({
  text,
  buttonHandler,
  radius = 45,
  styles,
}) => {
  return (
    <TouchableOpacity
      onPress={() => buttonHandler()}
      style={[
        style.container,
        {height: radius, width: radius, borderRadius: radius},
        styles,
      ]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;
