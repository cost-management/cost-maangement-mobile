import React, {FC} from 'react';
import {Text, View} from 'react-native';
import style from './style';

interface TransactionContainerProps {
  category: string;
  amount: string;
}

const TransactionContainer: FC<TransactionContainerProps> = ({
  category,
  amount,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{category}</Text>

      <View style={style.sumContainer}>
        <Text style={style.sum}>{`${amount} грн`}</Text>
      </View>
    </View>
  );
};

export default TransactionContainer;
