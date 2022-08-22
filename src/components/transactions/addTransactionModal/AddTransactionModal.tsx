import React, {FC} from 'react';
import {Button, Modal, View} from 'react-native';

interface AddTransactionModalProps {
  toogleModal: () => void;
  isToogleModal: boolean;
}

const AddTransactionModal: FC<AddTransactionModalProps> = ({
  isToogleModal,
  toogleModal,
}) => {
  return (
    <Modal visible={isToogleModal} animationType="slide">
      <View>
        <Button title="Close Modal" onPress={toogleModal} />
      </View>
    </Modal>
  );
};

export default AddTransactionModal;
