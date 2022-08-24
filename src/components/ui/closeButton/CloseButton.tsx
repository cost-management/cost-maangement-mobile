import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleProp, ViewProps} from 'react-native';
import style from './style';

interface CloseButtonProps {
  styles: StyleProp<ViewProps>;
  buttonHandler: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({buttonHandler, styles}) => {
  return (
    <TouchableOpacity style={[style.container, styles]} onPress={buttonHandler}>
      <Text style={style.title}>X</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;
