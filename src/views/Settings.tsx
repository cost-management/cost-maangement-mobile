import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SettingsCategoryContainer from '../components/settings/settingsCategoryContainer/SettingsCategoryContainer';
import SettingsHeader from '../components/settings/settingsHeader/SettignsHeader';
import useSettings from '../constants/settings';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_BOTTOM,
} from '../constants/styleConstants';

const Settings: FC = () => {
  const {inviteSettings} = useSettings();

  return (
    <View style={style.container}>
      <SettingsHeader />
      <ScrollView style={{maxHeight: '59%'}}>
        <SettingsCategoryContainer settings={inviteSettings} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#E2E2E2',
    paddingTop: 40,
    paddingBottom: PADDING_BOTTOM,
  },
});

export default Settings;
