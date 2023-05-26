import { BiUser } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Option } from '../option';
import { UserLogic } from './UserLogic';

export const User = () => {
  const { user, userOptions, toggleUserOptions, closeUserSession, toggleModalActive, changeView } =
    UserLogic();

  return (
    <article className='basis-1/2 h-[40px] flex justify-end border[1px] border-primary-900'>
      {!user && (
        <Link to='/auth/login'>
          <button className='h-full lg:px-4 lg:bg-primary-900 lg:text-white  text-neutral-700 justify-center flex items-center gap-x-2 text-neutral-700'>
            <BiUser className='text-2xl lg:text-xl' />{' '}
            <span className='hidden lg:flex'>Iniciar sesión</span>
          </button>
        </Link>
      )}
      {user && (
        <article className='relative'>
          <picture className='h-[40px] w-[40px] cursor-pointer' onClick={toggleUserOptions}>
            <img
              className='w-full h-full'
              src={`https://ui-avatars.com/api/?name=${user?.name}&background=002966&rounded=true&color=fff`}
              alt='avatar user'
            />
          </picture>

          {userOptions && (
            <div className='absolute bg-red-900 right-0 top-[120%] min-w-[180px] border-[1px] border-neutral-100'>
              <div
                onClick={() => {
                  changeView('edit');
                  toggleModalActive();
                }}
              >
                <Option>
                  <BiUser className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Tu Cuenta</p>
                </Option>
              </div>
              <div
                onClick={() => {
                  changeView('favorite');
                  toggleModalActive();
                }}
              >
                <Option>
                  <AiOutlineHeart className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Favoritos</p>
                </Option>
              </div>
              <div onClick={closeUserSession}>
                <Option>
                  <CiLogout className='text-neutral-700 text-2xl' />
                  <p className='text-neutral-500  basis-full text-center'>Cerrar sesión</p>
                </Option>
              </div>
            </div>
          )}
        </article>
      )}
    </article>
  );
};
