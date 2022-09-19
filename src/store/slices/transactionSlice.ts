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
      let isTransactionInFolder = false;
      state.transactions = state.transactions.map(transaction => {
        if (transaction.folder_id === action.payload.folder_id) {
          isFolder = true;
          isTransactionInFolder = true;
          return action.payload;
        } else {
          isFolder = true;
          return transaction;
        }
      });
      if (!isFolder) {
        state.transactions = [...state.transactions, action.payload];
      } else if (!isTransactionInFolder) {
        state.transactions = [...state.transactions, action.payload];
      }
    },
    deleteTransaction: (
      state,
      action: PayloadAction<{folder_id: string; transaction_id: string}>,
    ) => {
      state.transactions = state.transactions.map(transaction => {
        if (transaction.folder_id !== action.payload.folder_id) {
          return transaction;
        } else {
          return {
            ...transaction,
            transactions: transaction.transactions.filter(
              transaction => transaction.id !== action.payload.transaction_id,
            ),
          };
        }
      });
    },
  },
});

export const {addTransaction, refreshTransactions, deleteTransaction} =
  transactionSlice.actions;

export default transactionSlice.reducer;
