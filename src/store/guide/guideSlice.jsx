import { createSlice } from '@reduxjs/toolkit';

const isSave =
  localStorage.getItem('saveAnswer') !== null
    ? JSON.parse(localStorage.getItem('saveAnswer'))
    : true;

const base = {
  isIntroductionActive: isSave,
};

export const guideSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setIsIntroductionActive(state) {
      state.isIntroductionActive = !state.isIntroductionActive;
    },
  },
});

export const { setIsIntroductionActive } = guideSlice.actions;
