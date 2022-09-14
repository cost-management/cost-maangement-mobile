import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Ref, RefObject} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface SwipableTransactionState {
  swipableTransaction: RefObject<Swipeable> | null;
}

const initialState: SwipableTransactionState = {
  swipableTransaction: null,
};

const swipableTransactionSlice = createSlice({
  name: 'swipableTransaction',
  initialState,
  reducers: {
    swipe: (state, action) => {
      state.swipableTransaction = action.payload;
    },
    endSwipe: state => {
      state.swipableTransaction?.current?.close();
      state.swipableTransaction = null;
    },
  },
});

export const {swipe, endSwipe} = swipableTransactionSlice.actions;

export default swipableTransactionSlice.reducer;
