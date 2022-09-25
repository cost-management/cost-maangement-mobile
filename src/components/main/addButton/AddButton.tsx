import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import AddButtonIcon from '../../../assets/icons/AddButton.svg';

interface AddButtonProps {
  buttonHanlder: () => void;
}

const AddButton: FC<AddButtonProps> = ({buttonHanlder}) => {
  return (
    <TouchableOpacity onPress={buttonHanlder}>
      <AddButtonIcon width={60} height={60} />
    </TouchableOpacity>
  );
};

export default AddButton;
