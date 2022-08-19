import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import Main from '../views/Main';
import Settings from '../views/Settings';
import Transactions from '../views/Transactions';
import MainRoutes from './MainRoutes';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="main" component={MainRoutes} />
      <Tab.Screen name="transactions" component={Transactions} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
