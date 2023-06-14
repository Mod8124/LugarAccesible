/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import {
  setDeniedLocation,
  setUserLocation,
  setCurrentLocation,
} from '../../store/places/placesSlice';
import { setIsDetailActive, setName } from '../../store/detail/detailsSlice';
import { useGeolocation } from './useGeolocation';
import { useEffect } from 'react';
import { getNearbyPlaces } from '../../store/places/thunks';
import { isThereIcon } from '../../helpers/filterByIcon';
import { getDetail } from '../../store/detail/thunk';

let oldMarkers = [];
let circle = null;

export const useActionsPlaces = (map, nearbyPlaces) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const { coordinatesUser, acceptedPermissions } = useGeolocation();

  useEffect(() => {
    if (!acceptedPermissions) return doDeniedUserLocation();
    doSetUserLocation(coordinatesUser);
  }, [acceptedPermissions]);

  const doSetUserLocation = (coordsUser) => {
    dispatch(setUserLocation(coordsUser));
  };

  const doSetCurrentLocation = (coords) => {
    dispatch(setCurrentLocation(coords));
  };

  const doDeniedUserLocation = () => {
    dispatch(setDeniedLocation());
  };

  const doGetNearbyPlaces = (coord) => {
    dispatch(getNearbyPlaces(coord));
  };

  const createCircle = (coords) => {
    if (circle) {
      circle.setMap(null);
      circle = null;
    }

    // Create a new circle with the user's location
    circle = new window.google.maps.Circle({
      map,
      center: coords,
      radius: 5000,
      strokeColor: '#66BFFF',
      strokeOpacity: 0.3,
      strokeWeight: 2,
      fillColor: '#CCEAFF',
      fillOpacity: 0.2,
    });
  };

  const setDetail = (name) => {
    dispatch(setIsDetailActive());
    dispatch(setName(name));
  };

  const getDetailPlace = (placeId) => {
    dispatch(getDetail(placeId));
  };

  const setPostion = (coords) => {
    createCircle(coords);
    doSetCurrentLocation(coords);
    doGetNearbyPlaces(coords);
  };

  const deleteOldValues = () => {
    oldMarkers.forEach((marker) => {
      marker.setMap(null);
    });
    oldMarkers = [];
  };

  const doPrintNearbyPlaces = () => {
    deleteOldValues();
    nearbyPlaces.forEach((place) => {
      const { location, name, wheelchair_accessible_entrance, place_id, types } = place;
      const { lat, lng } = location;

      const urlIcon = isThereIcon(types[0]);

      const urlPath = () => {
        return filter && filter === 'accesible' && wheelchair_accessible_entrance
          ? `/assets/icons-map/icon-${urlIcon}-accesible.svg`
          : filter && filter === 'no-accesible' && !wheelchair_accessible_entrance
          ? `/assets/icons-map/icon-${urlIcon}-no.svg`
          : `/assets/icons-map/icon-${urlIcon}.svg`;
      };

      const urlImg = {
        url: urlPath(),
        scaledSize: new window.google.maps.Size(38, 38),
        labelOrigin: new window.google.maps.Point(60, 20),
        anchor: new window.google.maps.Point(20, 20),
      };

      const latLgn = new window.google.maps.LatLng(lat, lng);
      // eslint-disable-next-line no-unused-vars
      const marker = new window.google.maps.Marker({
        position: latLgn,
        map,
        name,
        icon: urlImg,
        // label: {
        //   text: name,
        //   color: '#344051',
        // },
        place_id,
      });
      oldMarkers.push(marker);
      marker.addListener('click', (event) => {
        const placeId = marker.place_id; // place's place_id
        const name = marker.name; // place's name
        setDetail(name); // this show the modal
        getDetailPlace(placeId); // this goes to look for the information place
      });
    });
  };

  return {
    createCircle,
    setPostion,
    deleteOldValues,
    doGetNearbyPlaces,
    doPrintNearbyPlaces,
  };
};
