import { createSlice } from '@reduxjs/toolkit';

const base = {
  isDetailActive: false, // toggle the modal
  name: '', // place's name
  placeId: '',
  rating: 0,
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
    setPlaceId(state, { payload }) {
      state.placeId = payload;
    },
    setIsLoading(state) {
      state.loading = !state.loading;
    },
    setPlace(state, { payload }) {
      state.place = payload;
    },
    setComments(state, { payload }) {
      state.comments = payload;
    },
    setRating(state, { payload }) {
      state.rating = payload;
    },
  },
});

export const {
  setIsDetailActive,
  setName,
  setPlaceId,
  setIsLoading,
  setPlace,
  setComments,
  setRating,
} = detailSlice.actions;
