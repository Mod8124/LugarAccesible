import React from 'react';
import IconAccebility from './IconAccebility';
import { GrMap } from 'react-icons/gr';
import { FaChrome } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { getDomainSiteWeb } from '../../helpers/places';
import Hour from './Hour';

export default function TabDetails({ place }) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center border-b border-b-slate-200 pb-2'>
        <IconAccebility place={place} size='sm' />
        <p>
          {place.wheelchair_accessible_entrance
            ? 'Entrada accesible para sillas de ruedas'
            : 'Entrada no accesible para sillas de ruedas'}
        </p>
      </div>

      <div className='border-b border-b-slate-200 pb-2'>Agregar a favoritos</div>
      <section className='flex flex-col gap-2 text-md text-stone-600'>
        <div className='flex gap-2 items-center'>
          <GrMap className='text-xl' />
          <p className=''>{place?.formatted_address}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <MdPhoneAndroid className='text-xl' />
          <p>{place?.international_phone_number}</p>
        </div>

        <div className='flex gap-2 items-center'>
          <FaChrome className='text-xl' />
          <a href={place?.website} target='_blank'>
            {getDomainSiteWeb(place?.website)}
          </a>
        </div>

        <Hour hour={place?.opening_hours} />
      </section>
    </div>
  );
}
