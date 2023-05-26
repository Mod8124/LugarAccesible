/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, deleteOneSearchHistory } from '../../../../../store/search/searchSlice';
import { getResults } from '../../../../../store/search/thunk';
import { useToggle } from '../../../../../hooks/useToggle';
import { useState, useRef } from 'react';
import { useMapStore } from '../../../../hooks/useMapStore';
import { setSearchNearPlaces } from '../../../../../store/places/placesSlice';

export const SearchLogic = () => {
  const { currentLocation } = useSelector((state) => state.places);
  const { searchHistory, results, isLoading } = useSelector((state) => state.search);
  const { map } = useMapStore();
  const [titleOption, setTitleOption] = useState('Todos');
  const [titleValue, setTitleValue] = useState('');
  const [queryValue, setQueryValue] = useState('');
  const [showResults, toggleShowResults] = useToggle(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  // when the user click a search
  const handleClick = (place) => {
    const { location, name, wheelchair_accessible_entrance, place_id, types } = place;
    dispatch(
      setSearchNearPlaces([
        {
          location,
          name,
          place_id,
          types,
          wheelchair_accessible_entrance,
        },
      ]),
    );
    const { lat, lng } = location;

    const latLng = new window.google.maps.LatLng(lat, lng);

    // Pan the map to the new marker's location
    map.panTo(latLng);
    map.setZoom(15);
  };

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
      lat: currentLocation.lat,
      lng: currentLocation.lng,
      types: titleValue,
    };
    if (!showResults) toggleShowResults();
    dispatch(getResults(newSearch));
  };

  const changeTitleOption = (title, value) => {
    setTitleOption(title);
    setTitleValue(value);
  };

  return {
    titleOption,
    queryValue,
    searchHistory,
    isActiveInput,
    inputRef,
    results,
    showResults,
    toggleShowResults,
    isLoading,
    changeTitleOption,
    setQueryValue,
    search,
    handleFocus,
    handleBlur,
    deleteHistory,
    handleClick,
  };
};
