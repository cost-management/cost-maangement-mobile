import {TransactionAPI} from '../services/TransactionService';
import {
  addTransaction,
  refreshTransactions,
} from '../store/slices/transactionSlice';
import {useAppDispatch} from './redux';
const useTransactions = () => {
  const [getTransactionsQuery] =
    TransactionAPI.useLazyGetAllTransactionsQuery();
  const dispatch = useAppDispatch();
  const getTransactions = async (id: string, folder_id: string) => {
    const {data} = await getTransactionsQuery({id, folder_id});
    dispatch(refreshTransactions({folder_id, transactions: data!}));
  };

  return {getTransactions};
};

export default useTransactions;
