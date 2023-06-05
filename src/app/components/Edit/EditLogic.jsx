import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive } from '../../../store/auth/authSlice';

export const EditLogic = () => {
  const { isModalActive, view, favorites, user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setIsModalActive());
  };

  return {
    isModalActive,
    view,
    user,
    favorites,
    isLoading,
    toggleModal,
  };
};
