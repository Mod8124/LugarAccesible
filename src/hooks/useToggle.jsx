import { useState } from 'react';

export const useToggle = (initialState) => {
  const [active, setActive] = useState(initialState);

  const toggleActive = () => {
    setActive(!active);
  };

  return [active, toggleActive];
};
