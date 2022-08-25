import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './style';

interface DoubleButtonProps {
  leftButtonHanlder: () => void;
  rightButtonHandler: () => void;
  styles?: {
    container?: object;
    leftButton?: object;
    rightButton?: object;
    title?: object;
  };
  leftButtonText?: string;
  rightButtonText?: string;
}

const DoubleButton: FC<DoubleButtonProps> = ({
  leftButtonHanlder,
  rightButtonHandler,
  styles,
  leftButtonText = '-',
  rightButtonText = '+',
}) => {
  return (
    <View style={[style.container, styles?.container]}>
      <TouchableOpacity
        style={[style.leftButton, styles?.leftButton]}
        onPress={leftButtonHanlder}>
        <Text style={[style.title, styles?.title]}>{leftButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.rightButton, styles?.rightButton]}
        onPress={rightButtonHandler}>
        <Text style={[style.title, styles?.title]}>{rightButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoubleButton;
