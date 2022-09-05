import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TransactionsFolder} from '../../models/Transaction';

interface TransactionState {
  transactions: TransactionsFolder[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionsFolder>) => {
      let isFolder = false;
      state.transactions = state.transactions.map(transaction => {
        if (transaction.folder_id === action.payload.folder_id) {
          isFolder = true;
          return {
            ...transaction,
            transactions: [
              ...transaction.transactions,
              action.payload.transactions[0],
            ],
          };
        } else {
          isFolder = true;
          return transaction;
        }
      });
      if (!isFolder) {
        state.transactions = [...state.transactions, action.payload];
      }
    },
    refreshTransactions: (state, action: PayloadAction<TransactionsFolder>) => {
      let isFolder = false;
      state.transactions = state.transactions.map(transaction => {
        if (transaction.folder_id === action.payload.folder_id) {
          isFolder = true;
          return action.payload;
        } else {
          isFolder = true;
          return transaction;
        }
      });
      if (!isFolder) {
        state.transactions = [...state.transactions, action.payload];
      }
    },
  },
});

export const {addTransaction, refreshTransactions} = transactionSlice.actions;

export default transactionSlice.reducer;
