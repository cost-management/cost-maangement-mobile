import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import StatisticModal from '../components/main/statisticModal/StatisticModal';
import useModal from '../hooks/modal';

const Statistics: FC = () => {
  const modal = useModal();

  return (
    <View>
      <Text>Statistics</Text>
      <TouchableOpacity onPress={modal.toogleModal}>
        <Text>Modal</Text>
      </TouchableOpacity>
      <StatisticModal {...modal} />
    </View>
  );
};

export default Statistics;
