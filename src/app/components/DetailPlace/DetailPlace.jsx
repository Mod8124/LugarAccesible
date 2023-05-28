import { ModalSide } from '../Modal-Side';
import { useDetailPlace } from '../../hooks/useDetailPlace';
import { getUrlImage } from '../../helpers/places';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import Tabs from './Tabs';

export default function DetailPlace() {
  const { showModalPlaceDetail, loading, place, name, isDetailActive } = useDetailPlace();

  return (
    <>
      {isDetailActive && (
        <ModalSide title={name} toggleActive={showModalPlaceDetail}>
          {loading && (
            <div className='flex items-center text-[1.2em] pt-3 gap-x-2 text-neutral-900  text-pt flex-row'>
              <GiEarthAfricaEurope size={35} className='animate-spin text-primary-700' />{' '}
              <h2 className='text-xl'>Cargando...</h2>
            </div>
          )}
          {!loading && (
            <div>
              <figure>
                <img
                  src={
                    place && place.photos
                      ? getUrlImage(place.photos)
                      : 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                  }
                  alt={`Imagen del sitio`}
                  className='max-h-[150px] object-cover w-full'
                />
              </figure>

              <Tabs place={place} />
            </div>
          )}
        </ModalSide>
      )}
    </>
  );
}
