import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Main from '../views/Main';
import Settings from '../views/Settings';
import Transactions from '../views/Transactions';
import MainRoutes from './MainRoutes';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 30,
          right: 30,
          borderRadius: 15,
          height: 70,
          backgroundColor: 'rgba(182, 182, 182, 1)',
        },
        tabBarButton: props => {
          return <TouchableOpacity {...props} delayPressIn={0} />;
        },
      }}>
      <Tab.Screen name="main" component={MainRoutes} />
      <Tab.Screen name="transactions" component={Transactions} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
