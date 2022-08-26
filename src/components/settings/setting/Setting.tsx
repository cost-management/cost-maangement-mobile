import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import style from './style';

interface SettingProps {
  title: string;
  styles?: StyleProp<ViewStyle>;
  settingHanlder: () => void;
}

const Setting: FC<SettingProps> = ({title, styles, settingHanlder}) => {
  return (
    <View style={style.container}>
      <View style={style.iconContainer} />
      <TouchableOpacity style={style.titleContainer} onPress={settingHanlder}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
      <View style={[style.line, styles]} />
    </View>
  );
};

export default Setting;
