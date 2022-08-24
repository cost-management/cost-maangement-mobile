import React, {FC, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import AddTransactionModal from '../components/transactions/addTransactionModal/AddTransactionModal';
import Transaction from '../components/transactions/transaction/Transaction';
import useModal from '../hooks/modal';
import {
  SCREEN_WIDTH,
  TRANSACTION_CONTAINER_HORIZONTAL_PADDING,
} from '../constants/styleConstants';
import DoubleButton from '../components/ui/doubleButton/DoubleButton';
import {TRANSACTION_WIDTH} from '../constants/styleConstants';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {
  TRANSACTION_HEIGHT,
  TRANSACTION_MARGIN,
} from '../constants/styleConstants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TransactionsRoutesParams} from '../routes/TransactionsRoutes';
import {toogleModal} from '../store/slices/categorySlice';

export type CategoryType = 'income' | 'cost';

const Transactions: FC = () => {
  const {incomeCategory, costCategory} = useAppSelector(
    state => state.categories,
  );
  const [categories, setCategories] = useState(costCategory);
  const [categoryType, setCategoryType] = useState<CategoryType>('cost');
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProp<TransactionsRoutesParams>>();

  return (
    <View style={style.container}>
      <Text style={style.title}>Transactions</Text>
      <DoubleButton
        leftButtonHanlder={() => {
          setCategories(costCategory);
          setCategoryType('cost');
        }}
        rightButtonHandler={() => {
          setCategories(incomeCategory);
          setCategoryType('income');
        }}
      />
      <ScrollView
        style={{
          height: 3 * TRANSACTION_HEIGHT + 3 * TRANSACTION_MARGIN * 2,
          marginTop: 10,
          width:
            TRANSACTION_WIDTH * 3 +
            3 * TRANSACTION_MARGIN * 2 +
            TRANSACTION_CONTAINER_HORIZONTAL_PADDING * 2,
        }}
        contentContainerStyle={[
          style.containerTransactions,
          {
            height:
              Math.ceil(categories.length / 3) * TRANSACTION_HEIGHT +
              TRANSACTION_MARGIN * 2 * Math.ceil(categories.length / 3),
          },
        ]}>
        {categories.map(category => (
          <Transaction
            title={category}
            transactionHandler={() => {
              dispatch(toogleModal());
              navigate('createModal', {category, categoryType});
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  containerTransactions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: TRANSACTION_CONTAINER_HORIZONTAL_PADDING,
  },
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  title: {
    marginTop: 68,
    marginBottom: 68,
  },
});

export default Transactions;
