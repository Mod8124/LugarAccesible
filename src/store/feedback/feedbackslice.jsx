import { createSlice } from '@reduxjs/toolkit';

const base = {
  overallSatisfaction: 0,
  subject: null,
  msg: null,
};

export const feedbackSlice = createSlice({
  name: 'feedbackSlice',
  initialState: base,
  reducers: {
    setStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    restart: (state) => {
      return base;
    },
  },
});
export const { setStates, restart } = feedbackSlice.actions;
