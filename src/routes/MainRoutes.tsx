import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import AllTransactions from '../views/AllTransactions';
import Folder from '../views/Folder';
import Main from '../views/Main';

export type MainRoutesParams = {
  main: undefined;
  allTransactions: undefined;
  folder: undefined;
};

const MainRoutes: FC = () => {
  const Stack = createNativeStackNavigator<MainRoutesParams>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="allTransactions" component={AllTransactions} />
        <Stack.Screen name="folder" component={Folder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
