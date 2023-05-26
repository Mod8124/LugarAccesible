import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'placesSlice',
  initialState: {
    userLocation: null,
    currentLocation: null,
    deniedLocation: true,
    nearbyPlaces: [],
  },
  reducers: {
    setUserLocation: (state, { payload }) => {
      state.deniedLocation = false;
      state.userLocation = payload;
      state.currentLocation = state.userLocation;
    },
    setCurrentLocation(state, { payload }) {
      state.currentLocation = payload;
    },
    setDeniedLocation: (state) => {
      state.deniedLocation = true;
    },
    setSearchNearPlaces(state, { payload }) {
      payload.forEach((newPlace) => {
        if (!state.nearbyPlaces.includes(newPlace.place_id)) {
          state.nearbyPlaces.push(newPlace);
        }
      });
    },
    setNearbyPlaces: (state, { payload }) => {
      state.nearbyPlaces = [];
      // push new places when this not exists in the storage
      payload.forEach((newPlace) => {
        if (!state.nearbyPlaces.includes(newPlace.place_id)) {
          state.nearbyPlaces.push(newPlace);
        }
      });
    },
  },
});

export const {
  setUserLocation,
  setCurrentLocation,
  setDeniedLocation,
  setNearbyPlaces,
  setOldNearByPlaces,
  setSearchNearPlaces,
} = placesSlice.actions;
