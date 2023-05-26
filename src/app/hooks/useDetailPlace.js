import { useSelector, useDispatch } from 'react-redux';

import { setIsDetailActive } from '../../store/detail/detailsSlice';

export const useDetailPlace = () => {
  const { isDetailActive, name, place, loading } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const showModalPlaceDetail = () => {
    dispatch(setIsDetailActive());
  };

  return {
    showModalPlaceDetail,
    place,
    loading,
    isDetailActive,
    name,
  };
};
