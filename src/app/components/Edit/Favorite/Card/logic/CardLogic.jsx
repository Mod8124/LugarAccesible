/* eslint-disable camelcase */
import { useMapStore } from '../../../../../hooks/useMapStore';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../../../../../store/auth/thunk';
import { setSearchNearPlaces } from '../../../../../../store/places/placesSlice';

export const CardLogic = (favorite) => {
  const dispatch = useDispatch();
  const { map } = useMapStore();
  const deleteFavorites = (placeId) => {
    dispatch(deleteFavorite(placeId));
  };
  const handleClick = () => {
    const { location, name, wheelchair_accessible_entrance, place_id, types } = favorite;
    dispatch(
      setSearchNearPlaces([
        {
          location,
          name,
          place_id,
          types,
          wheelchair_accessible_entrance,
        },
      ]),
    );
    const { lat, lng } = location;

    const latLng = new window.google.maps.LatLng(lat, lng);

    // Pan the map to the new marker's location
    map.panTo(latLng);
    map.setZoom(15);
  };

  return {
    deleteFavorites,
    handleClick,
  };
};
