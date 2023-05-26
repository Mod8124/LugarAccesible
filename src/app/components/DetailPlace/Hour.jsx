import React from 'react';
import { IoTime } from 'react-icons/io5';

export default function Hour({ hour }) {
  const { open_now, periods } = hour;
  const day = new Date().getDay();

  return (
    <div className='flex gap-2 items-center'>
      <IoTime className='text-xl' />
      <p className={`${open_now ? 'text-green-700' : 'text-red-700'} font-bold flex gap-2`}>
        {open_now ? 'Abierto' : 'Cerrado'}
        <span className='font-normal text-stone-600'>
          {open_now
            ? `Cierra a las ${periods[day]?.close?.time}`
            : `Abre mañana a las ${periods[day]?.open?.time}`}
        </span>
        {/* Todo: hacer que la hora de cierre tenga un formato de hora correcto */}
      </p>
    </div>
  );
}
