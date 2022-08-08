import React, {FC} from 'react';
import {TextInput} from 'react-native';
interface FieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}
const Field: FC<FieldProps> = props => {
  return <TextInput {...props} />;
};

export default Field;
