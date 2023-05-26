import { setIsLoading, setPlace } from './detailsSlice';

export const getDetail = (placeId) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const resp = await fetch('/mock/placesDetails.json'); // when is the endpoint just change the url and past the placeId
      const placeFind = await resp.json();
      dispatch(setPlace(placeFind[0]));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading());
    }
  };
};
