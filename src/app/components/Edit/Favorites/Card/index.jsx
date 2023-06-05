/* eslint-disable camelcase */
import { typesToSpanish } from '../../../../../helpers/typesToSpanish';
import { AiFillHeart } from 'react-icons/ai';
import { deleteFavorite } from '../../../../../store/auth/thunk';
import { useMapStore } from '../../../../hooks/useMapStore';
import { setSearchNearPlaces } from '../../../../../store/places/placesSlice';
import { useDispatch } from 'react-redux';

export const Card = ({ favorite }) => {
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
  return (
    <article className='flex gap-x-3 pb-4 cursor-pointer' onClick={handleClick}>
      <div className='basis-full'>
        <div className='flex items-center gap-x-2 py-2 '>
          <img
            className='max-w-[26px] basis-[10%]'
            src={'/assets/icons/wheel-accesible.svg'}
            alt='icono sillas de rueda'
          />
          <h3 className='text-neutral-700 font-bold basis-[90%]'>{favorite.name}</h3>
        </div>

        <p className='text-neutral-500 '>{favorite.formatted_address}</p>

        <div className='flex gap-x-1 flex-wrap gap-y-1 py-2'>
          {(favorite.types.length > 0 &&
            favorite.types.map((type, index) => {
              const newWord = type.replace(type, typesToSpanish[type]);
              return (
                <div
                  className='capitalize px-2 bg-neutral-100 text-neutral-900'
                  key={newWord + index}
                >
                  {newWord}
                </div>
              );
            })) || (
            <div className='capitalize px-2 bg-neutral-100 text-neutral-900'>Esblecimiento</div>
          )}
        </div>

        <div
          className='flex gap-x-3  items-center py-2 border-y-[1px] cursor-pointer hover:bg-neutral-100/40'
          onClick={() => deleteFavorites(favorite.place_id)}
        >
          <AiFillHeart size={24} className='text-alert-error' />
          <p className='text-primary-900'>Agregado a tus favoritos</p>
        </div>
      </div>
    </article>
  );
};
