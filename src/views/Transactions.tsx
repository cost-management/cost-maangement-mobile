import React, {FC, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import AddTransactionModal from '../components/transactions/addTransactionModal/AddTransactionModal';
import Transaction from '../components/transactions/transaction/Transaction';
import useModal from '../hooks/modal';
import {
  SCREEN_WIDTH,
  TRANSACTION_CONTAINER_HORIZONTAL_PADDING,
} from '../constans/styleConstants';
import DoubleButton from '../components/ui/doubleButton/DoubleButton';
import {TRANSACTION_WIDTH} from '../constans/styleConstants';
import {useAppSelector} from '../hooks/redux';
import {
  TRANSACTION_HEIGHT,
  TRANSACTION_MARGIN,
} from '../constans/styleConstants';

const Transactions: FC = () => {
  const {toogleModal, isToogleModal} = useModal();
  const {incomeCategory, costCategory} = useAppSelector(
    state => state.categories,
  );

  const [categories, setCategories] = useState(costCategory);

  return (
    <View style={style.container}>
      <Text style={style.title}>Transactions</Text>
      <DoubleButton
        leftButtonHanlder={() => setCategories(costCategory)}
        rightButtonHandler={() => setCategories(incomeCategory)}
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
          <Transaction title={category} transactionHandler={toogleModal} />
        ))}
      </ScrollView>
      <AddTransactionModal
        toogleModal={toogleModal}
        isToogleModal={isToogleModal}
      />
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
