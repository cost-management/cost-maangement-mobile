import React, {FC} from 'react';
import {Text, View} from 'react-native';
import style from './style';

interface AuthHeaderProps {
  title: string;
}

const AuthHeader: FC<AuthHeaderProps> = ({title}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
