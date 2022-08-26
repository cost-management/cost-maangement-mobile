import React, {FC, useContext} from 'react';
import {Text, View} from 'react-native';
import {UserContext} from '../../../contexts/UserProvider';
import style from './style';

const SettingsHeader: FC = () => {
  const {user} = useContext(UserContext);

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{user.attributes?.email}</Text>
      </View>
    </View>
  );
};

export default SettingsHeader;
