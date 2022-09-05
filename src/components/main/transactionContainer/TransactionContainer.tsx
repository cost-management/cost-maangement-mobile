import React, {FC} from 'react';
import {Text, View} from 'react-native';
import style from './style';

interface TransactionContainerProps {
  category: string;
  units: string;
  nanos: string;
}

const TransactionContainer: FC<TransactionContainerProps> = ({
  category,
  units,
  nanos,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{category}</Text>

      <View style={style.sumContainer}>
        <Text style={style.sum}>{`${units || 0}${
          nanos ? `.${parseInt(nanos, 10) < 10 ? `${nanos}0` : nanos}` : ''
        } грн`}</Text>
      </View>
    </View>
  );
};

export default TransactionContainer;
