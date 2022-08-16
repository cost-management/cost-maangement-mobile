import {useState} from 'react';

const useModal = () => {
  const [isToogleModal, setToogleModal] = useState<boolean>(false);

  const toogleModal = () => setToogleModal(prev => !prev);

  return {isToogleModal, toogleModal};
};

export default useModal;
