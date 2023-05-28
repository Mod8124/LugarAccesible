import { IoIosArrowForward } from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useToggle } from '../../../hooks/useToggle';
import { setIsIntroductionActive } from '../../../store/guide/guideSlice';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';

export const ModalIntroduction = () => {
  const [saveAnswer, toggleSaveAnswer] = useToggle(false);
  const { setIsOpen } = useTour();
  const dispatch = useDispatch();
  const toggleIsIntroductionActive = () => {
    dispatch(setIsIntroductionActive());
  };
  return (
    <section className='bg-black/40 fixed w-full h-full z-[10] left-0 top-0 backdrop-blur-sm flex items-center justify-center'>
      <article className='w-[90%] min-h-[41%] bg-white max-w-[740px] p-4 sm:p-8  modal__landscape'>
        <picture className='flex justify-center'>
          <img src='/public/assets/logo/logo-black.svg' alt='logo' />
        </picture>
        <p className='pt-3 pb-2 sm:pt-5 sm:pb-5 sm:w-[90%] text-center break-words text-pt md:text-pd text-neutral-700 w-full break-words m-auto'>
          <strong>Descubre</strong> lugares <strong>accesibles</strong> para silla de ruedas
          <strong> cerca </strong>de ti y mejora tu calidad de vida de forma conveniente. Disfruta
          de una <strong>experiencia</strong> fácil de usar con nuestro <strong>sistema:</strong>
        </p>
        <article className='flex flex-wrap lg:justify-between lg:gap-y-0 justify-evenly gap-y-6'>
          <div className='flex flex-wrap gap-y-4 gap-x-2 items-center justify-center  basis-[100%] sm:basis-[50%] lg:basis-auto'>
            <h5 className='text-neutral-500 font-bold   basis-full text-center'>Lugar accesible</h5>
            <picture>
              <img src='/public/assets/icons-map/icon-bank-accesible.svg' alt='icon accesible' />
            </picture>
            <picture>
              <img
                className='w-[44px]'
                src='/public/assets/icons/wheel-accesible.svg'
                alt='icon accesible'
              />
            </picture>
          </div>
          <div className='flex flex-col gap-y-4 items-center h-full basis-[100%] sm:basis-[50%] lg:basis-auto'>
            <h5 className='text-neutral-500 font-bold '>Lugar en general</h5>
            <picture>
              <img src='/public/assets/icons-map/icon-bank.svg' alt='icon accesible' />
            </picture>
          </div>
          <div className='flex flex-wrap gap-y-4  gap-x-2 items-center justify-center h-full'>
            <h5 className='text-neutral-500 font-bold basis-full text-center'>
              Lugar no-accesible
            </h5>
            <picture>
              <img src='/public/assets/icons-map/icon-bank-no.svg' alt='icon accesible' />
            </picture>
            <picture>
              <img
                className='w-[44px]'
                src='/public/assets/icons/wheel-no.svg'
                alt='icon accesible'
              />
            </picture>
          </div>
        </article>
        <div className='flex flex-wrap pt-10 flex w-[90%] m-auto'>
          <div
            className='basis-[100%] pb-3 flex gap-x-2 items-center cursor-pointer'
            onClick={toggleSaveAnswer}
          >
            <div
              className={
                saveAnswer
                  ? 'w-[16px] h-[16px] rounded-full'
                  : 'w-[16px] h-[16px] rounded-full border-[1px] border-primary-500'
              }
            >
              {saveAnswer && <AiFillCheckCircle className='w-full h-full text-primary-500' />}
            </div>
            <p className='text-neutral-500'>No mostrar de nuevo</p>
          </div>
          <div className='basis-full pb-1 flex-wrap flex items-center gap-x-2 justify-between gap-y-2'>
            <button
              className='border-[1px] border-primary-900 basis-full md:max-w-[200px]  text-primary-900 font-bold h-[40px] px-11 hover:bg-neutral-100'
              onClick={() => {
                if (saveAnswer) {
                  localStorage.setItem('saveAnswer', JSON.stringify(false));
                }
                toggleIsIntroductionActive();
              }}
            >
              Saltar tutorial
            </button>
            <button
              onClick={() => {
                toggleIsIntroductionActive();
                setIsOpen(true);
              }}
              className='bg-primary-900 text-white basis-full md:max-w-[230px] justify-center flex h-[40px] px-11 items-center gap-x-2 hover:bg-primary-700'
            >
              Seguir tutorial <IoIosArrowForward className='text-2xl' />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
