import { IconsPlaces } from './IconPlaces';

// check if we have available the icon of type
export const isThereIcon = (type) => {
  const firstType =
    type === 'lodging'
      ? 'hotel'
      : type === 'department_store' || type === 'clothing_store' || type === 'shopping_mall'
      ? 'supermarket'
      : type;

  return IconsPlaces.filter((icon) => icon === firstType)[0] || 'all';
};
