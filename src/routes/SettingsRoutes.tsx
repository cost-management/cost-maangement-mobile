import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import InviteModal from '../components/settings/inviteModal/InviteModal';
import Invites from '../views/Invites';
import Settings from '../views/Settings';

export type SettingsRoutesParams = {
  settingsView: undefined;
  inviteModal: undefined;
  invites: undefined;
};

const Stack = createNativeStackNavigator<SettingsRoutesParams>();

const SettingsRoutes: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="settingsView" component={Settings} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{headerShown: true, animation: 'slide_from_right'}}>
        <Stack.Screen name="invites" component={Invites} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal', animation: 'fade'}}>
        <Stack.Screen name="inviteModal" component={InviteModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SettingsRoutes;
