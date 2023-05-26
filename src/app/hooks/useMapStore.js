import { useSelector } from 'react-redux';

export const useMapStore = () => {
  const state = useSelector((state) => state.map);
  return state;
};
