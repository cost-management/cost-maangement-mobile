import {createSlice} from '@reduxjs/toolkit';

interface CategoryState {
  costCategory: string[];
  incomeCategory: string[];
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
  ],
  incomeCategory: ['Зарплата', 'Подарунок', 'Виплата'],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
