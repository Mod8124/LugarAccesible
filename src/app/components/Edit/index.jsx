import { ModalSide } from '../Modal-Side';
import { AiOutlineHeart, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { EditLogic } from './EditLogic';
import { Card } from './Favorites/Card';
import { Profile } from './Profile';

export const Edit = () => {
  const { isModalActive, view, toggleModal, favorites, isLoading } = EditLogic();
  return (
    <>
      {isModalActive && (
        <ModalSide
          title={view === 'edit' ? 'Editar pefil' : 'Tus favoritos'}
          toggleActive={toggleModal}
        >
          {view === 'edit' && <Profile />}
          {view === 'favorite' && (
            <article className='w-full'>
              {!isLoading && favorites.length === 0 && (
                <div>
                  <h3 className='flex gap-x-3 items-center text-pd text-neutral-700'>
                    <AiOutlineHeart className='text-alert-error text-2xl' /> No tienes lugares
                    favoritos
                  </h3>
                  <p className='text-neutral-500 pt-4'>
                    Tus lugares favoritos están vacíos, descubre todo los lugares accesible que
                    tienes cerca de ti.
                  </p>
                </div>
              )}
            </article>
          )}
          {isLoading && (
            <div className='flex items-center text-[1.2em] pt-3 gap-x-2 text-neutral-900  text-pt flex-row'>
              <AiOutlineLoading3Quarters size={35} className='animate-spin text-primary-700' />{' '}
              <h2 className='text-xl'>Cargando...</h2>
            </div>
          )}
          {!isLoading && favorites.length > 0 && (
            <div>
              <h2 className='flex gap-x-3 items-center text-pd text-neutral-700'>
                Lugares favoritos <strong className='text-primary-900'>({favorites.length})</strong>
              </h2>
              <div className='pt-6'>
                {favorites.map((favorite) => (
                  <div key={favorite.place_id}>
                    <Card favorite={favorite} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </ModalSide>
      )}
    </>
  );
};
