import React, {FC} from 'react';
import {Text, View} from 'react-native';
import style from './style';

interface TransactionContainerProps {
  category: string;
  sum: string;
}

const TransactionContainer: FC<TransactionContainerProps> = ({
  category,
  sum,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{category}</Text>

      <View style={style.sumContainer}>
        <Text style={style.sum}>{`${sum || 0} грн`}</Text>
      </View>
    </View>
  );
};

export default TransactionContainer;
