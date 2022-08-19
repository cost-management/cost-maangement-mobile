import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllTransactions from '../views/AllTransactions';
import Folder from '../views/Folder';
import Main from '../views/Main';

export type MainRoutesParams = {
  mainPage: undefined;
  allTransactions: undefined;
  folder: undefined;
};
const Stack = createNativeStackNavigator<MainRoutesParams>();
const MainRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: route.name === 'mainPage' ? false : true,
      })}>
      <Stack.Screen name="mainPage" component={Main} />
      <Stack.Screen name="allTransactions" component={AllTransactions} />
      <Stack.Screen name="folder" component={Folder} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
