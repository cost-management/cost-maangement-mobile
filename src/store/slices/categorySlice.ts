import {createSlice} from '@reduxjs/toolkit';

interface CategoryState {
  costCategory: string[];
  incomeCategory: string[];
  openModal: boolean;
}

const initialState: CategoryState = {
  costCategory: [
    'Кафе та Ресторани',
    'Долг',
    'Транспорт',
    'Комунальні послуги',
    'Подарунок',
    'Продукти',
    'Техніка',
    'Нерухомість',
    'Розваги',
    'Одяг',
    'Техніка',
    'Нерухомість',
    'Розваги',
    'Одяг',
  ],
  incomeCategory: ['Зарплата', 'Подарунок', 'Виплата'],
  openModal: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toogleModal: (state: CategoryState) => {
      state.openModal = !state.openModal;
    },
  },
});

export const {toogleModal} = categorySlice.actions;

export default categorySlice.reducer;
