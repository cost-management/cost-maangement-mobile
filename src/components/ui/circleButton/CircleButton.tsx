import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';

interface CircleButtonProps {
  buttonHandler: Function;
  text: string;
  radius?: number;
}

const CircleButton: FC<CircleButtonProps> = ({
  text,
  buttonHandler,
  radius = 45,
}) => {
  return (
    <TouchableOpacity
      onPress={() => buttonHandler()}
      style={[style.container, {height: radius, width: radius}]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;
