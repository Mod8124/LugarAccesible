import {
  MdRestaurantMenu,
  MdHotel,
  MdLocalHospital,
  MdShoppingCart,
  MdHomeWork,
} from 'react-icons/md';
import { BsPiggyBankFill } from 'react-icons/bs';

export const SearchOptions = [
  {
    title: 'Todos',
    value: '',
    icon: <MdHomeWork />,
  },
  {
    title: 'Restaurantes',
    value: 'restaurant',
    icon: <MdRestaurantMenu />,
  },
  {
    title: 'Hoteles',
    value: 'lodging',
    icon: <MdHotel />,
  },
  {
    title: 'Hospitales',
    value: 'hospital',
    icon: <MdLocalHospital />,
  },
  {
    title: 'Bancos',
    value: 'bank',
    icon: <BsPiggyBankFill />,
  },
  {
    title: 'Supermercados',
    value: 'supermarket',
    icon: <MdShoppingCart />,
  },
];
