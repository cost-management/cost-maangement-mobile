import {Field} from 'formik';
import React, {FC} from 'react';
import {Text, View, TextInputProps} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import style from './style';

interface InputContaierProps {
  title: string;
  input: TextInputProps;
}

const InputContainer: FC<InputContaierProps> = ({title, input}) => {
  return (
    <View style={style.contaier}>
      <Text>{title}</Text>
      <TextInput {...input} />
    </View>
  );
};

export default InputContainer;
