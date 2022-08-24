import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import InviteModal from '../components/settings/inviteModal/InviteModal';
import Settings from '../views/Settings';

export type SettingsRoutesParams = {
  settingsView: undefined;
  inviteModal: undefined;
};

const Stack = createNativeStackNavigator<SettingsRoutesParams>();

const SettingsRoutes: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="settingsView" component={Settings} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="inviteModal" component={InviteModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SettingsRoutes;
