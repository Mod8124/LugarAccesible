import { environment } from '../../settings/environment';
const URL_PHOTOS_API = 'https://maps.googleapis.com/maps/api/place/photo';

export const getUrlImage = (arr) => {
  const { photo_reference: photo } = arr;
  return `${URL_PHOTOS_API}?maxwidth=320&photo_reference=${photo}&key=${environment.API_KEY_MAPS}`;
};
