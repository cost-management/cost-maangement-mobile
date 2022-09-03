import React, {FC} from 'react';
import {Text, View} from 'react-native';

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
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{category}</Text>
      </View>
      <View>
        <Text>{sum}</Text>
      </View>
    </View>
  );
};

export default TransactionContainer;
