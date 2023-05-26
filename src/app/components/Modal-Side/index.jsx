import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalSide = ({ title, toggleActive, children }) => {
  return (
    <article
      data-testid='feedback'
      className='fixed top-0 right-0 bg-white min-w-[380px] h-[100vh] border-[2px] border-neutral-100 max-w-sm lg:p-9 lg:pt-16 p-6 z-[3] pt-9 overflow-y-scroll flex-col lg:overflow-hidden'
    >
      <div className='flex items-center justify-between pb-6'>
        <h1 className='text-primary-900 font-bold text-[28px]'>{title}</h1>
        <AiOutlineCloseCircle
          data-testid='close'
          className='text-3xl text-primary-900 cursor-pointer'
          onClick={toggleActive}
        />
      </div>
      {children}
    </article>
  );
};
