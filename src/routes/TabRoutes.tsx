import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import Main from '../views/Main';
import Settings from '../views/Settings';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
