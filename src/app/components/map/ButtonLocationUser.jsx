import { BiCurrentLocation } from 'react-icons/bi';

export const ButtonLocationUser = ({ handleClick }) => {
  return (
    <button
      className='fixed right-[8px] bottom-[20px] z-[2] bg-primary-700 py-2 px-3 rounded-md shadow hover:bg-blue-700 transition-colors'
      onClick={handleClick}
    >
      <BiCurrentLocation className='text-white' size={20} />
    </button>
  );
};
