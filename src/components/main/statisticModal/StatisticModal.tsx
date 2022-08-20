import React, {FC} from 'react';
import {Text, View, Modal, Button} from 'react-native';

interface StatisticModalProps {
  toogleModal: () => void;
  isToogleModal: boolean;
}

const StatisticModal: FC<StatisticModalProps> = ({
  toogleModal,
  isToogleModal,
}) => {
  return (
    <Modal visible={isToogleModal} animationType="slide">
      <View>
        <Text>StatisticModal</Text>
        <Button title="Close Modal" onPress={toogleModal} />
      </View>
    </Modal>
  );
};

export default StatisticModal;
