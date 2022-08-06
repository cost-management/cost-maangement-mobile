import {useState} from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text: string) => setValue(text);

  return {value, onChangeText};
};

export default useInput;
