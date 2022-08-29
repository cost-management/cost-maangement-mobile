import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

interface SubmitButtonProps {
  title: string;
  submit: any;
}

const SubmitButton: FC<SubmitButtonProps> = ({title, submit}) => {
  return (
    <TouchableOpacity style={style.container} onPress={submit}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
