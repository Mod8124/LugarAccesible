import { useMap } from '../../hooks/useMap';
import { ButtonLocationUser } from './ButtonLocationUser';

export const MapView = () => {
  const { refElement, back } = useMap();

  return (
    <>
      <div ref={refElement} className='fixed inset-0 w-screen h-screen'></div>
      <ButtonLocationUser handleClick={back} />
    </>
  );
};
