import { createSlice } from '@reduxjs/toolkit';

const base = {
  isDetailActive: false, // toggle the modal
  name: '', // place's name
  comments: [],
  place: null,
  loading: false,
};

export const detailSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsDetailActive(state) {
      state.isDetailActive = !state.isDetailActive;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    setIsLoading(state) {
      state.loading = !state.loading;
    },
    setPlace(state, { payload }) {
      state.place = payload;
    },
  },
});

export const { setIsDetailActive, setName, setIsLoading, setPlace } = detailSlice.actions;
