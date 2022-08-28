import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import MainRoutes from './MainRoutes';
import TransactionsRoutes from './TransactionsRoutes';
import {useAppSelector} from '../hooks/redux';
import SettingsRoutes from './SettingsRoutes';
import HomeIcon from '../assets/icons/Home.svg';
import AddIcon from '../assets/icons/Add.svg';
import SettingsIcon from '../assets/icons/Settings.svg';
import HomeActiveIcon from '../assets/icons/Home_active.svg';
import AddActiveIcon from '../assets/icons/Add_active.svg';
import SettingsActiveIcon from '../assets/icons/Settings_active.svg';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  const isOpenModal = useAppSelector(state => state.categories.openModal);
  const {invites} = useAppSelector(state => state.invites);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 30,
          right: 30,
          borderRadius: 15,
          height: 50,
          backgroundColor: 'rgba(182, 182, 182, 1)',
          display: isOpenModal ? 'none' : 'flex',
        },
        tabBarButton: props => {
          return <TouchableOpacity {...props} delayPressIn={0} />;
        },
        tabBarLabelStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="main"
        component={MainRoutes}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? (
              <HomeIcon width={40} height={40} />
            ) : (
              <HomeActiveIcon width={40} height={40} />
            );
          },
        }}
      />
      <Tab.Screen
        name="transactions"
        component={TransactionsRoutes}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? (
              <AddIcon width={40} height={40} />
            ) : (
              <AddActiveIcon width={40} height={40} />
            );
          },
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsRoutes}
        options={{
          tabBarBadge: invites.length === 0 ? undefined : invites.length,
          tabBarIcon: ({focused}) => {
            return !focused ? (
              <SettingsIcon width={40} height={40} />
            ) : (
              <SettingsActiveIcon width={40} height={40} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
