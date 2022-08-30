import {FC, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {toogleModal} from '../store/slices/categorySlice';
import {useAppDispatch} from './redux';

const useBackHanlder = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        dispatch(toogleModal());
        return null;
      },
    );

    return () => backHandler.remove();
  }, []);

  return {};
};

export default useBackHanlder;
