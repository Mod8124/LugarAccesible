import { ModalSide } from '../Modal-Side';
import { useDetailPlace } from '../../hooks/useDetailPlace';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { useState } from 'react';
import { Details } from './Details';
import { Comments } from './Comments';

export default function DetailPlace() {
  const { showModalPlaceDetail, loading, place, name, isDetailActive } = useDetailPlace();
  const [view, setView] = useState('detail');
  const changeView = (view) => {
    setView(view);
  };
  return (
    <>
      {isDetailActive && (
        <ModalSide title={name} toggleActive={showModalPlaceDetail}>
          <article className='flex gap-x-6  border-b-[2px] border-b-neutral-100'>
            <button
              className={
                view === 'detail'
                  ? 'text-primary-900 px-2 pb-2 border-b-[2px] border-b-primary-900 outline-none'
                  : 'text-neutral-500 px-2 pb-2 border-b-[2px] border-b-primary-900/0 outline-none'
              }
              onClick={() => changeView('detail')}
            >
              Detalles
            </button>
            <button
              className={
                view === 'comments'
                  ? 'text-primary-900 px-2 pb-2 border-b-[2px] border-b-primary-900 outline-none'
                  : 'text-neutral-500 px-2 pb-2 border-b-[2px] border-b-primary-900/0 outline-none'
              }
              onClick={() => changeView('comments')}
            >
              Comentarios
            </button>
          </article>
          {loading && (
            <div className='flex items-center text-[1.2em] pt-3 gap-x-2 text-neutral-900  text-pt flex-row'>
              <GiEarthAfricaEurope size={35} className='animate-spin text-primary-700' />{' '}
              <h2 className='text-xl'>Cargando...</h2>
            </div>
          )}

          <article>
            {!loading && view === 'detail' && <Details place={place} />}
            {!loading && view === 'comments' && <Comments />}
          </article>
        </ModalSide>
      )}
    </>
  );
}
