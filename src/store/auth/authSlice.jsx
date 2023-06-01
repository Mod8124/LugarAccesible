import { createSlice } from '@reduxjs/toolkit';

const checkUser =
  sessionStorage.getItem('user') !== null ? JSON.parse(sessionStorage.getItem('user')) : null;

const base = {
  user: checkUser,
  isLoading: false,
  errors: null,
  isValid: false,
  favorites: [],
  isModalActive: false,
  view: 'edit', // edit , favorites
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsValid(state) {
      state.isValid = !state.isValid;
    },
    setIsModalActive(state) {
      state.isModalActive = !state.isModalActive;
    },
    setView(state, { payload }) {
      state.view = payload;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    setErrors(state, { payload }) {
      state.errors = payload;
    },
    setLogOut(state) {
      state.user = null;
      state.errors = null;
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('jwt');
    },
  },
});

export const {
  setIsLoading,
  setIsValid,
  setUser,
  setErrors,
  setLogOut,
  setIsModalActive,
  setView,
} = authSlice.actions;
