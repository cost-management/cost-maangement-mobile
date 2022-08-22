import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import Settings from '../views/Settings';
import MainRoutes from './MainRoutes';
import TransactionsRoutes from './TransactionsRoutes';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="main" component={MainRoutes} />
      <Tab.Screen name="transactions" component={TransactionsRoutes} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
