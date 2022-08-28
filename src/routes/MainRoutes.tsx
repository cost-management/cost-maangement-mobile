import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllTransactions from '../views/AllTransactions';
import Folder from '../views/Folder';
import Main from '../views/Main';
import {IFolder} from '../models/Folder';
import Statistics from '../views/Statistics';
import CreateCardModal from '../components/main/createCardModal/CreateCardModal';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/styleConstants';

export type MainRoutesParams = {
  mainPage: undefined;
  allTransactions: undefined;
  folder: {folder: IFolder};
  statistic: undefined;
  addFolder: undefined;
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
      <Stack.Screen name="statistic" component={Statistics} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen name="addFolder" component={CreateCardModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainRoutes;
