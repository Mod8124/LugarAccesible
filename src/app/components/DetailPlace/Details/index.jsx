import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaMapMarkerAlt, FaRegMap, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';
import { typesToSpanish } from '../../../../helpers/typesToSpanish';
import { getUrlImage } from '../../../helpers/places';
import { Paragraph } from './paragraph';

export const Details = ({ place }) => {
  const day = new Date().getDay();
  return (
    <article className='pt-5 '>
      <figure>
        <img
          src={
            place && place.photos
              ? getUrlImage(place.photos[0])
              : 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          }
          alt={`Imagen del sitio`}
          className='max-h-[150px] object-cover w-full'
        />
      </figure>
      <div className='flex items-center gap-x-4 py-3  border-b-[1px] boder-b-neutral-100'>
        <img
          className='h-[32px]'
          src={
            place.wheelchair_accessible_entrance
              ? '/assets/icons/wheel-accesible.svg'
              : '/assets/icons/wheel-no.svg'
          }
          alt='icono sillas de rueda'
        />
        <p className='text-neutral-500'>
          {place && place.wheelchair_accessible_entrance
            ? 'Lugar accesible para sillas de ruedas'
            : 'Lugar no accesible para sillas de ruedas'}
        </p>
      </div>
      <div className='flex items-center gap-x-4 py-4  border-b-[1px] boder-b-neutral-100'>
        {!place.isFavorite ? (
          <AiOutlineHeart size={30} className='text-alert-error' />
        ) : (
          <AiFillHeart size={30} className='text-alert-error' />
        )}
        <p className='text-primary-900'>
          {!place.isFavorite ? 'Agregar a Favoritos' : 'Agregado a Favoritos'}
        </p>
      </div>

      <article className='border-b-[2px] border-b-neutral-100 py-4 flex gap-y-4 flex-wrap'>
        <div className='flex items-center gap-x-4'>
          <FaMapMarkerAlt size={28} className='text-neutral-700' />
          <p className='text-neutral-500 capitalize'>
            {place.types
              ? place.types[0].replace(place.types[0], typesToSpanish[place.types[0]])
              : 'Esblecimiento'}
          </p>
        </div>

        <Paragraph text={place.formatted_address && place.formatted_address}>
          <FaRegMap size={32} className='text-neutral-700' />
          <p className='text-neutral-500'>{place.formatted_address && place.formatted_address}</p>
        </Paragraph>

        <Paragraph text={place.international_phone_number && place.international_phone_number}>
          <FaPhoneAlt size={24} className='text-neutral-700' />
          <p className='text-neutral-500'>
            {place.international_phone_number && place.international_phone_number}
          </p>
        </Paragraph>

        <div className='flex items-center gap-x-4'>
          <ImEarth size={24} className='text-neutral-700' />
          <p className='text-neutral-500'>
            {place.website && place.website && (
              <a href={place.website} target='_blank' rel='noreferrer'>
                {place.website}
              </a>
            )}
          </p>
        </div>

        <div className='flex items-center gap-x-4'>
          <FaClock size={24} className='text-neutral-700' />
          <p className='text-neutral-500'>
            {place.opening_hours && place.opening_hours.open_now ? (
              <strong className='text-alert-success'>Abierto ahora</strong>
            ) : (
              <strong className='text-alert-error'>Cerrado ahora</strong>
            )}
            {
              <span className='font-normal text-stone-600'>
                {place.opening_hours && place.open_now
                  ? ` - Cierra  ${place.opening_hours.periods[day]?.close?.time}`
                  : ` - Abre ${place.opening_hours.periods[day]?.open?.time}`}
              </span>
            }
          </p>
        </div>
      </article>
    </article>
  );
};
