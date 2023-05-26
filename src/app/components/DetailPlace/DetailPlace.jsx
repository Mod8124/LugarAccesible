import { useEffect, useState } from 'react';
import { ModalSide } from '../Modal-Side';
import { useDetailPlace } from '../../hooks/useDetailPlace';
import { getUrlImage } from '../../helpers/places';

import Tabs from './Tabs';
import IconAccebility from './IconAccebility';

export default function DetailPlace() {
  const { showModalPlaceDetail, loading, place, isDetailActive } = useDetailPlace();

  // useEffect(() => {
  //   console.log('placeId', placeId);

  // }, []);

  return (
    <>
      {isDetailActive && (
        <ModalSide
          title={loading ? 'Cargando...' : place.name}
          // title=''
          toggleActive={showModalPlaceDetail}
        >
          {!loading && (
            <div>
              <figure>
                <img
                  src={getUrlImage(place.photos)}
                  alt={`Imagen del sitio ${place.name}`}
                  className='max-h-[150px] object-cover w-full'
                />
              </figure>

              <section className='my-3'>
                {/* <p className='font-bold text-2xl text-gray-700'>{place.name}</p> */}

                <div className='flex w-full justify-between items-center'>
                  <div className='text-stone-600 text-md leading-tight'>
                    <p className=''>
                      {place.rating} ⭐ {`(${place.user_ratings_total})`}
                    </p>
                    <p className='first-letter:uppercase'>{place.types[0]}</p>
                  </div>
                  <IconAccebility place={place} size='lg' />
                </div>
              </section>

              <Tabs place={place} />
            </div>
          )}
        </ModalSide>
      )}
    </>
  );
}
