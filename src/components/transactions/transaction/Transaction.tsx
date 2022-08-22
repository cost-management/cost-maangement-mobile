import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

interface TransactionProps {
  title: string;
  transactionHandler: any;
}

const Transaction: FC<TransactionProps> = ({title, transactionHandler}) => {
  return (
    <TouchableOpacity onPress={transactionHandler} style={style.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Transaction;
