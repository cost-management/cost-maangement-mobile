import React, {FC} from 'react';
import {KeyboardTypeOptions, StyleProp, TextInput} from 'react-native';
interface FieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  style?: object;
}
const Field: FC<FieldProps> = props => {
  return <TextInput {...props} textAlign="center" />;
};

export default Field;
