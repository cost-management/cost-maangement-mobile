import React, {FC} from 'react';
import {View} from 'react-native';
import Setting from '../setting/Setting';
import style from './style';
import {setting} from '../../../models/Settings';

interface SettingsCategoryContainerProps {
  settings: setting[];
}

const SettingsCategoryContainer: FC<SettingsCategoryContainerProps> = ({
  settings,
}) => {
  return (
    <View style={style.container}>
      {settings.map((setting, id) => (
        <Setting
          settingHanlder={setting.settingHandler}
          title={setting.title}
          styles={{borderBottomWidth: id !== settings.length - 1 ? 1 : 0}}
        />
      ))}
    </View>
  );
};

export default SettingsCategoryContainer;
