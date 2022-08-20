import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import AddTransactionModal from '../components/transactions/AddTransactionModal';
import useModal from '../hooks/modal';

const Transactions: FC = () => {
  const {toogleModal, isToogleModal} = useModal();

  return (
    <View>
      <Text>Transactions</Text>
      <Button title="Add" onPress={toogleModal} />
      <AddTransactionModal
        toogleModal={toogleModal}
        isToogleModal={isToogleModal}
      />
    </View>
  );
};
export default Transactions;
