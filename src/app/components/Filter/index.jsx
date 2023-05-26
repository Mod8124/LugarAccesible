import { Button } from './Button/';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setDefault } from '../../../store/filter/filterSlice';

export const Filter = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const changeActive = (value) => {
    if (filter === value) {
      dispatch(setDefault());
    } else {
      dispatch(setFilter(value));
    }
  };

  return (
    <article className='fixed bottom-2 lg:bottom-0 lg:top-[70px] z-[1] left-3 flex gap-x-3'>
      <Button
        accesible={true}
        changeActive={changeActive}
        active={filter === 'accesible' && true}
      />
      <Button
        accesible={false}
        changeActive={changeActive}
        active={filter === 'no-accesible' && true}
      />
    </article>
  );
};
