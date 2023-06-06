import { ModalSide } from '../Modal-Side';
import { EditLogic } from './EditLogic';
import { Profile } from './Profile';
import { Favorite } from './Favorite';

export const Edit = () => {
  const { isModalActive, view, toggleModal } = EditLogic();
  return (
    <>
      {isModalActive && (
        <ModalSide
          title={view === 'edit' ? 'Editar pefil' : 'Tus favoritos'}
          toggleActive={toggleModal}
        >
          {view === 'edit' && <Profile />}
          {view === 'favorite' && <Favorite />}
        </ModalSide>
      )}
    </>
  );
};
