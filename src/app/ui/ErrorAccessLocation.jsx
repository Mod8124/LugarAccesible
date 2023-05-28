import { MdLocationOff } from 'react-icons/md';

export const ErrorAccessLocation = () => {
  return (
    <section className='bg-black/60 fixed w-full h-full z-[11] left-0 top-0 backdrop-blur-sm flex items-center justify-center'>
      <div className='bg-red-100 text-red-700  py-6 px-6 rounded-lg flex gap-2 items-center'>
        <MdLocationOff size={24} />
        <p className='text-sm font-bold'>
          ¡Por favor permita el acceso a la ubicación para una mejor experiencia!
        </p>
      </div>
    </section>
  );
};
