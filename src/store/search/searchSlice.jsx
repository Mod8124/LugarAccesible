import { createSlice } from '@reduxjs/toolkit';

const searchHistory =
  localStorage.getItem('searchHistory') !== null
    ? JSON.parse(localStorage.getItem('searchHistory'))
    : [];

const base = {
  query: '',
  types: '',
  isLoading: false,
  results: [],
  searchHistory,
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: base,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setQuery(state, action) {
      state.query = action.payload;

      // Add the latest search to the search history
      const newSearch = {
        query: action.payload,
      };

      state.searchHistory.unshift(newSearch);

      // Keep only the last 6 searches
      if (state.searchHistory.length > 6) {
        state.searchHistory.pop();
      }

      // Save the updated search history to the local storage
      localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
    },
    setTypes(state, action) {
      state.types = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    deleteOneSearchHistory(state, action) {
      const index = action.payload;
      state.searchHistory.splice(index, 1);

      // Save the updated search history to the local storage
      localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
    },
  },
});

export const { setIsLoading, setQuery, setTypes, deleteOneSearchHistory, setResults } =
  searchSlice.actions;
