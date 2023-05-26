import { useSelector } from 'react-redux';

export const usePlacesStore = () => {
  const state = useSelector((state) => state.places);
  return state;
};
