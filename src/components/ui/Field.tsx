import React, {FC} from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
interface FieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}
const Field: FC<FieldProps> = props => {
  return <TextInput {...props} />;
};

export default Field;
