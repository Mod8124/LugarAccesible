import React from 'react';

export default function IconAccebility({ place, size }) {
  return (
    <figure
      className={`${
        place && place.wheelchair_accessible_entrance && place.wheelchair_accessible_entrance
          ? 'bg-green-100'
          : 'bg-red-100'
      } 
      ${size === 'lg' ? 'p-5' : 'p-3'}  rounded-full`}
      title={
        place && place.wheelchair_accessible_entrance && place.wheelchair_accessible_entrance
          ? 'Es un sitio accesible'
          : 'No es un sitio accesible'
      }
    >
      <img
        src={
          place && place.wheelchair_accessible_entrance && place.wheelchair_accessible_entrance
            ? '/assets/icons/wheel-accesible.svg'
            : '/assets/icons/wheel-no.svg'
        }
        alt=''
        className={size === 'lg' ? 'w-8' : 'w-5'}
      />
    </figure>
  );
}
