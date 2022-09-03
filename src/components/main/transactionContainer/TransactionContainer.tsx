import React, {FC} from 'react';
import {Text, View} from 'react-native';
import style from './style';

interface TransactionContainerProps {
  title: string;
  category: string;
  sum: string;
}

const TransactionContainer: FC<TransactionContainerProps> = ({
  title,
  category,
  sum,
}) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.category}>{category}</Text>
      </View>
      <View style={style.sumContainer}>
        <Text style={style.sum}>{`${sum || 0} грн`}</Text>
      </View>
    </View>
  );
};

export default TransactionContainer;
