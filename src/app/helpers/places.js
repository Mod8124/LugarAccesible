import { environment } from '../../settings/environment';
const URL_PHOTOS_API = 'https://maps.googleapis.com/maps/api/place/photo';

export const getUrlImage = (arr) => {
  const obj = arr[0];
  const { photo_reference } = obj;
  return `${URL_PHOTOS_API}?maxwidth=320&photo_reference=${photo_reference}&key=${environment.API_KEY_MAPS}`;
};

export const getImageUrls = (arr, width, height) => {
  const photos = arr.map((img) => ({
    src: `${URL_PHOTOS_API}?maxwidth=${width}&photo_reference=${img.photo_reference}&key=${environment.API_KEY_MAPS}`,
    width,
    height,
  }));
  return photos;
};

export const getDomainSiteWeb = (url) => url.split('/')[2];
