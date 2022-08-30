import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransaction} from '../../models/Transaction';

interface TransactionState {
  transactions: ITransaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      console.log(state.transactions);
      state.transactions = [...state.transactions, action.payload];
    },
  },
});

export const {addTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
