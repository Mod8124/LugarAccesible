import { useSelector, useDispatch } from 'react-redux';
import { useToggle } from '../../../../hooks/useToggle';
import { setIsModalActive, setView, setLogOut } from '../../../../store/auth/authSlice';
import { getFavorites } from '../../../../store/auth/thunk';

export const UserLogic = () => {
  const { user } = useSelector((state) => state.auth);
  const [userOptions, toggleUserOptions] = useToggle(false);
  const dispatch = useDispatch();

  const closeUserSession = () => {
    dispatch(setLogOut());
  };

  const toggleModalActive = () => {
    dispatch(setIsModalActive());
  };

  const changeView = (value) => {
    dispatch(setView(value));
    if (value === 'favorite') {
      dispatch(getFavorites());
    }
  };

  return {
    user,
    userOptions,
    toggleUserOptions,
    closeUserSession,
    toggleModalActive,
    changeView,
  };
};
