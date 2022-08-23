import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
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
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 30,
          right: 30,
          borderRadius: 15,
          height: 70,
          backgroundColor: 'rgba(182, 182, 182, 1)',
          display: isOpenModal ? 'none' : 'flex',
        },
        tabBarButton: props => {
          return <TouchableOpacity {...props} delayPressIn={0} />;
        },
      }}>
      <Tab.Screen name="main" component={MainRoutes} />
      <Tab.Screen name="transactions" component={TransactionsRoutes} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
