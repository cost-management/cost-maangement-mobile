import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllTransactions from '../views/AllTransactions';
import Folder from '../views/Folder';
import Main from '../views/Main';
import {IFolder} from '../models/Folder';
import Statistics from '../views/Statistics';
import CreateCardModal from '../components/main/createCardModal/CreateCardModal';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/styleConstants';
import AddTransactionModal from '../components/transactions/addTransactionModal/AddTransactionModal';

export type MainRoutesParams = {
  mainPage: undefined;
  allTransactions: undefined;
  folder: {folder_id: string};
  statistic: undefined;
  addFolder: undefined;
  addTransaction: {
    folder_id: string;
    folderTitle: string;
    type: string;
  };
};
const Stack = createNativeStackNavigator<MainRoutesParams>();
const MainRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
        <Stack.Screen name="addTransaction" component={AddTransactionModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainRoutes;
