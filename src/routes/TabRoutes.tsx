import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import Settings from '../views/Settings';
import MainRoutes from './MainRoutes';
import TransactionsRoutes from './TransactionsRoutes';
import {useAppSelector} from '../hooks/redux';
const Tab = createBottomTabNavigator();
const TabRoutes: FC = () => {
  const isOpenModal = useAppSelector(state => state.categories.openModal);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: isOpenModal ? 'none' : 'flex'},
      }}>
      <Tab.Screen name="main" component={MainRoutes} />
      <Tab.Screen name="transactions" component={TransactionsRoutes} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
