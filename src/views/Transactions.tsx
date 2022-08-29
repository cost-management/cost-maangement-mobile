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
      <View style={style.headerContainer}>
        <Text style={style.title}>Transactions</Text>
      </View>
      <View style={style.bodyContainer}>
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
        <DoubleButton
          styles={{container: style.button}}
          leftButtonHanlder={() => {
            setCategories(costCategory);
            setCategoryType('cost');
          }}
          rightButtonHandler={() => {
            setCategories(incomeCategory);
            setCategoryType('income');
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerTransactions: {
    width: SCREEN_WIDTH - PADDING_HORIZONTAL * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#D9D9D9',
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
    marginTop: 40,
    maxHeight:
      SCREEN_HEIGHT -
      150 -
      PADDING_BOTTOM -
      40 -
      20 -
      TRANSACTION_MARGIN * 2 -
      (20 + TRANSACTION_MARGIN),
  },
  headerContainer: {
    height: 150,
  },
  bodyContainer: {
    backgroundColor: '#D9D9D9',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    height: SCREEN_HEIGHT - 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
  button: {
    position: 'absolute',
    top: -35,
  },
});

export default Transactions;
