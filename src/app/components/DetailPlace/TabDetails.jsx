import React from 'react';
import IconAccebility from './IconAccebility';
import { GrMap } from 'react-icons/gr';
import { FaChrome } from 'react-icons/fa';
import { MdPhoneAndroid, MdPlace } from 'react-icons/md';
import { getDomainSiteWeb } from '../../helpers/places';
import Hour from './Hour';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { typesToSpanish } from '../../../helpers/typesToSpanish';

export default function TabDetails({ place }) {
  console.log(place);
  return (
    <div className='flex flex-col gap-2 pt-1'>
      <div className='flex gap-2 items-center border-b border-b-slate-200 pb-2'>
        <IconAccebility place={place} size='sm' />
        <p>
          {place && place.wheelchair_accessible_entrance && place.wheelchair_accessible_entrance
            ? 'Accesible para sillas de ruedas'
            : 'No accesible para sillas de ruedas'}
        </p>
      </div>

      <div className='border-b border-b-slate-200 pb-2 flex items-center gap-x-2'>
        {place && place.isFavorite ? (
          <AiFillHeart size={20} className='text-alert-error' />
        ) : (
          <AiOutlineHeart size={20} className='text-alert-error' />
        )}
        Agregar a favoritos
      </div>
      <section className='flex flex-col gap-2 text-md text-neutral-700'>
        <div className='flex gap-2 items-center'>
          <MdPlace />
          <p className='first-letter:uppercase'>
            {place && place.types[0]
              ? place.types[0].replace(place.types[0], typesToSpanish[place.types[0]])
              : 'Esblecimiento'}
          </p>
        </div>
        <div className='flex gap-2 items-center'>
          <GrMap className='text-xl' />
          <p className=''>{place && place.formatted_address && place.formatted_address}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <MdPhoneAndroid className='text-xl' />
          <p>{place && place.international_phone_number && place.international_phone_number}</p>
        </div>

        {place && place.website && (
          <div className='flex gap-2 items-center'>
            <FaChrome className='text-xl' />
            <a href={place && place?.website} rel='noreferrer' target='_blank'>
              {getDomainSiteWeb(place && place?.website)}
            </a>
          </div>
        )}

        {place && place.opening_hours && <Hour hour={place?.opening_hours} />}
      </section>
    </div>
  );
}
