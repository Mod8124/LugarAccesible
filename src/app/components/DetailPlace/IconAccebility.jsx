import React from 'react';
import iconAccesible from '/assets/icons/wheel-accesible.svg';
import iconNotAccesible from '/assets/icons/wheel-no.svg';

export default function IconAccebility({ place, size }) {
  return (
    <figure
      className={`${place.wheelchair_accessible_entrance ? 'bg-green-100' : 'bg-red-100'} 
      ${size == 'lg' ? 'p-5' : 'p-3'}  rounded-full`}
      title={
        place.wheelchair_accessible_entrance ? 'Es un sitio accesible' : 'No es un sitio accesible'
      }
    >
      <img
        src={place.wheelchair_accessible_entrance ? iconAccesible : iconNotAccesible}
        alt=''
        className={size === 'lg' ? 'w-8' : 'w-5'}
      />
    </figure>
  );
}
