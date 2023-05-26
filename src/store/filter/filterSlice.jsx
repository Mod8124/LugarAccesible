import { createSlice } from '@reduxjs/toolkit';

const base = {
  filter: 'all', // 'all'(todos), 'accesible', 'no-accesible'
};

export const filterSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setDefault(state) {
      state.filter = 'all';
    },
  },
});

export const { setFilter, setDefault } = filterSlice.actions;
