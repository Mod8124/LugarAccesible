import { toast } from 'react-hot-toast';
import { setNearbyPlaces } from './placesSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';

export const getNearbyPlaces = (location) => {
  return async (dispatch) => {
    try {
      const { data } = await LugarAccesibleApi.get(
        `place/list?lat=${location.lat}&lng=${location.lng}`,
      );
      dispatch(setNearbyPlaces(data));
    } catch (error) {
      toast.error(`ERROR al cargar los lugares cercanos`, {
        position: 'top-right',
      });
    }
  };
};
