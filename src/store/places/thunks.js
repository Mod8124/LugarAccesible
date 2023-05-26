import { toast } from 'react-hot-toast';
import { setNearbyPlaces } from './placesSlice';

export const getNearbyPlaces = (location) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`http://localhost:3000/?lat=${location.lat}&lng=${location.lng}`);
      const nearbyPlaces = await resp.json();
      dispatch(setNearbyPlaces(nearbyPlaces));
    } catch (error) {
      toast.error(`ERROR al cargar los lugares cercanos`, {
        position: 'top-right',
      });
    }
  };
};
