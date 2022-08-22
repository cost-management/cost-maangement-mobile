import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './style';

interface DoubleButtonProps {
  leftButtonHanlder: () => void;
  rightButtonHandler: () => void;
}

const DoubleButton: FC<DoubleButtonProps> = ({
  leftButtonHanlder,
  rightButtonHandler,
}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.leftButton} onPress={leftButtonHanlder}>
        <Text style={style.title}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.rightButton} onPress={rightButtonHandler}>
        <Text style={style.title}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoubleButton;
