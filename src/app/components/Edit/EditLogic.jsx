import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive } from '../../../store/auth/authSlice';

export const EditLogic = () => {
  const { isModalActive, view, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setIsModalActive());
  };

  return {
    isModalActive,
    view,
    user,
    toggleModal,
  };
};
