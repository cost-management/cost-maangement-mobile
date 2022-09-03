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
      state.transactions = [...state.transactions, action.payload];
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload,
      );
    },
  },
});

export const {addTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
