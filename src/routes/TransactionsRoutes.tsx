import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import AddTransactionModal from '../components/transactions/addTransactionModal/AddTransactionModal';
import Transactions from '../views/Transactions';

export type TransactionsRoutesParams = {
  transactionsView: undefined;
  createModal: {
    category: string;
    categoryType: 'income' | 'cost';
  };
};

const Stack = createNativeStackNavigator<TransactionsRoutesParams>();

const TransactionsRoutes: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="transactionsView" component={Transactions} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{presentation: 'modal', animation: 'slide_from_bottom'}}>
        <Stack.Screen name="createModal" component={AddTransactionModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TransactionsRoutes;
