import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Transaction from '../components/transactions/transaction/Transaction';
import {SCREEN_WIDTH, TRANSACTION_MARGIN} from '../constants/styleConstants';
import DoubleButton from '../components/ui/doubleButton/DoubleButton';
import {PADDING_HORIZONTAL} from '../constants/styleConstants';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TransactionsRoutesParams} from '../routes/TransactionsRoutes';
import {toogleModal} from '../store/slices/categorySlice';
import {SCREEN_HEIGHT, PADDING_BOTTOM} from '../constants/styleConstants';

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
      <ScrollView style={style.scrollView}>
        <View style={style.containerTransactions}>
          {categories.map(category => (
            <Transaction
              title={category}
              transactionHandler={() => {
                dispatch(toogleModal());
                navigate('createModal', {category, categoryType});
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  containerTransactions: {
    width: SCREEN_WIDTH - PADDING_HORIZONTAL * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    paddingBottom: PADDING_BOTTOM,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
  },
  scrollView: {
    maxHeight: SCREEN_HEIGHT * 0.5,
    marginTop: 20,
  },
});

export default Transactions;
