import {withDelay, withSpring, withTiming} from 'react-native-reanimated';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {deleteTransaction} from '../../../store/slices/transactionSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  SCREEN_WIDTH,
  PADDING_HORIZONTAL,
} from '../../../constants/styleConstants';
import {swipe} from '../../../store/slices/swipableTransactionSlice';
import {Ref} from 'react';
import {TransactionAPI} from '../../../services/TransactionService';
import {changeSum} from '../../../store/slices/folderSlice';

const useTransactionContainer = () => {
  const dispatch = useAppDispatch();
  const [deleteTransactionMutatuion] =
    TransactionAPI.useDeleteTransactionMutation();
  const deleteHandler = async (
    folder_id: string,
    transaction_id: string,
    amount: string,
  ) => {
    dispatch(deleteTransaction({folder_id, transaction_id}));
    dispatch(
      changeSum({amount: (parseFloat(amount) * -1).toString(), folder_id}),
    );
    const response = await deleteTransactionMutatuion(transaction_id);
    console.log(response);
  };

  const {swipableTransaction} = useAppSelector(
    state => state.swipableTransaction,
  );

  const entering = (values: any) => {
    'worklet';
    const animations = {
      originX: withDelay(
        200,
        withTiming(0, {
          duration: 400,
        }),
      ),
      opacity: withDelay(200, withTiming(1, {duration: 400})),
    };
    const initialValues = {
      originX: -(SCREEN_WIDTH - 2 * PADDING_HORIZONTAL),
      opacity: 0.1,
    };

    return {
      initialValues,
      animations,
    };
  };

  const swipableHandler = (ref: Ref<Swipeable>) => {
    if (swipableTransaction && swipableTransaction !== ref) {
      swipableTransaction?.current?.close();
    }
    dispatch(swipe(ref));
  };

  return {deleteHandler, entering, swipableHandler};
};

export default useTransactionContainer;
