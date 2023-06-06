import { AiOutlineHeart, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Card } from './Card';

export const Favorite = () => {
  const { isLoading, favorites } = useSelector((state) => state.auth);
  return (
    <article>
      {isLoading && (
        <div className='flex items-center text-[1.2em] pt-3 gap-x-2 text-neutral-900  text-pt flex-row'>
          <AiOutlineLoading3Quarters size={35} className='animate-spin text-primary-700' />{' '}
          <h2 className='text-xl'>Cargando...</h2>
        </div>
      )}
      <div className='w-full'>
        {!isLoading && favorites.length === 0 && (
          <div>
            <h3 className='flex gap-x-3 items-center text-pd text-neutral-700'>
              <AiOutlineHeart className='text-alert-error text-2xl' /> No tienes lugares favoritos
            </h3>
            <p className='text-neutral-500 pt-4'>
              Tus lugares favoritos están vacíos, descubre todo los lugares accesible que tienes
              cerca de ti.
            </p>
          </div>
        )}
      </div>
      {favorites.length > 0 && (
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
    </article>
  );
};
