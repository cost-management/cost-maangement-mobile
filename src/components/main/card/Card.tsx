import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {style} from './style';

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.title}>Monobank</Text>
      <Text style={style.subTitle}>Vitalik14022001@gmail.com</Text>
    </TouchableOpacity>
  );
};

export default Card;
