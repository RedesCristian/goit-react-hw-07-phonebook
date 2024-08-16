import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterFormslice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterFormslice.actions;
export const filtersReducer = filterFormslice.reducer;
