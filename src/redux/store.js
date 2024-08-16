import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactFormSlice';
import { filtersReducer } from './filterFormslice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filtersReducer,
  },
});
