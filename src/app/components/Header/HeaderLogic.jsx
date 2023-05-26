import { useSelector, useDispatch } from 'react-redux';
import { setQuery, deleteOneSearchHistory } from '../../../store/search/searchSlice';
import { getResults } from '../../../store/search/thunk';
import { useToggle } from '../../../hooks/useToggle';
import { useState, useRef } from 'react';
import {
  MdRestaurantMenu,
  MdHotel,
  MdLocalHospital,
  MdShoppingCart,
  MdHomeWork,
} from 'react-icons/md';
import { BsPiggyBankFill } from 'react-icons/bs';

export const HeaderLogic = () => {
  const { userLocation } = useSelector((state) => state.places);
  const { searchHistory, results, isLoading } = useSelector((state) => state.search);
  const [titleOption, setTitleOption] = useState('Todos');
  const [titleValue, setTitleValue] = useState('');
  const [queryValue, setQueryValue] = useState('');
  const [showResults, toggleShowResults] = useToggle(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  function handleBlur(event) {
    const isButton = event.relatedTarget;
    const isButtonFocused = isButton?.dataset?.focus === 'true';
    // If the related target is not a button or does not have a "data-focus" attribute with a value of "true", set isActiveInput to false
    if (!isButtonFocused) {
      setIsActiveInput(false);
    }
  }

  const deleteHistory = (index) => {
    dispatch(deleteOneSearchHistory(index));
  };

  const search = () => {
    if (queryValue.length === 0) return;
    dispatch(setQuery(queryValue));
    const newSearch = {
      query: queryValue,
      lat: userLocation.lat,
      lng: userLocation.lng,
      types: titleValue,
    };
    if (!showResults) toggleShowResults();
    dispatch(getResults(newSearch));
    console.log(results);
  };

  const changeTitleOption = (title, value) => {
    setTitleOption(title);
    setTitleValue(value);
  };

  // options select open
  const options = [
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
  return {
    options,
    titleOption,
    queryValue,
    searchHistory,
    isActiveInput,
    inputRef,
    showResults,
    toggleShowResults,
    isLoading,
    changeTitleOption,
    setQueryValue,
    search,
    handleFocus,
    handleBlur,
    deleteHistory,
    results,
  };
};
