import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../contexts/UserProvider';
import {IFolder} from '../models/Folder';
import {MainRoutesParams} from '../routes/MainRoutes';
import {endSwipe} from '../store/slices/swipableTransactionSlice';
import {useAppDispatch, useAppSelector} from './redux';
import useTransactions from './transactions';

const useFolder = () => {
  const {user} = useContext(UserContext);
  const {params} = useRoute<RouteProp<MainRoutesParams, 'folder'>>();
  const {folders} = useAppSelector(state => state.folders);
  const {navigate} = useNavigation<NavigationProp<MainRoutesParams>>();
  const {getTransactions} = useTransactions();
  const currentFolder: IFolder = folders.find(
    folder => folder.id === params?.folder_id!,
  )!;
  useEffect(() => {
    getTransactions(user.attributes?.sub!, currentFolder.id);
  }, []);
  const dispatch = useAppDispatch();
  const {transactions} = useAppSelector(state => state.transactions);
  const {swipableTransaction} = useAppSelector(
    state => state.swipableTransaction,
  );
  const currentFolderTransactions = transactions.find(
    transaction => transaction.folder_id === currentFolder.id,
  );
  const scrollBegin = () => {
    if (swipableTransaction) {
      swipableTransaction.current?.close();
      dispatch(endSwipe());
    }
  };

  const viewAmount = (amount: string = '0') => {
    if (amount.includes('.')) {
      return amount;
    } else {
      return `${amount}.00`;
    }
  };
  return {
    viewAmount,
    scrollBegin,
    currentFolderTransactions,
    navigate,
    currentFolder,
    dispatch,
  };
};

export default useFolder;
