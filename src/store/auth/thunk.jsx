import { setIsLoading, setErrors, setUser, setIsValid, setFavorites } from './authSlice';
import { setDetailFavorite } from '../detail/detailsSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';
import { toast } from 'react-hot-toast';

export const submitRegister = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('user/register', form);
      if (data) {
        toast.success(`${data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
    } catch (err) {
      const { response } = err;
      if (response.data.msg) {
        toast.error(`${response.data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
      dispatch(setErrors(response.data.msg)); // set errors
    } finally {
      dispatch(setIsLoading()); // is loading  to false
    }
  };
};

export const submitValidation = (code) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const { data } = await LugarAccesibleApi.get(`user/validation/${code}`);
      if (data) {
        toast.success('Usuario Confirmado', { position: 'top-right', duration: 2000 });
        dispatch(setIsValid());
      }
    } catch (err) {
      const { response } = err;
      console.log(response);
    } finally {
      dispatch(setIsLoading());
    }
  };
};

export const submitUpdate = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const { data } = await LugarAccesibleApi.post(`user/update`, form);
      if (data) {
        dispatch(setUser(data.data));
        toast.success(`${data.msg}`, {
          position: 'top-right',
          duration: 5000,
        });
        const userString = JSON.stringify(data.data);
        sessionStorage.setItem('user', userString);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading());
    }
  };
};

export const submitUpdatePassword = (form, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const { data } = await LugarAccesibleApi.post(`user/updatePassword`, form);
      if (data) {
        resetForm();
        toast.success(`${data.msg}`, {
          position: 'top-right',
          duration: 5000,
        });
      }
    } catch (err) {
      const { response } = err;
      if (response.data.msg) {
        toast.error(`${response.data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
    } finally {
      dispatch(setIsLoading());
    }
  };
};

export const submitLogin = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('user/login', form);
      if (data) {
        const userString = JSON.stringify(data.data);
        sessionStorage.setItem('user', userString);
        sessionStorage.setItem('jwt', data.data.accesstoken);
        dispatch(setUser(data.data));
      }
    } catch (err) {
      const { response } = err;
      if (response.data.msg) {
        toast.error(`${response.data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
      dispatch(setErrors(response.data.msg)); // set errors
    } finally {
      dispatch(setIsLoading());
    }
  };
};

// favorites user
export const getFavorites = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.get('favorite');
      if (data) {
        dispatch(setFavorites(data.data));
      }
    } catch (err) {
      const { response } = err;
      console.log(response);
    } finally {
      dispatch(setIsLoading());
    }
  };
};

export const postFavorite = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await LugarAccesibleApi.post('favorite', form);
      if (data) {
        dispatch(setFavorites(data.data));
        dispatch(setDetailFavorite());
        toast.success('Agregado a favoritos', {
          position: 'top-right',
          duration: 3500,
        });
      }
    } catch (err) {
      const { response } = err;
      if (response.data.msg) {
        toast.error(`${response.data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
      dispatch(setErrors(response.data.msg)); // set errors
    }
  };
};

export const deleteFavorite = (placeId) => {
  return async (dispatch) => {
    try {
      const { data } = await LugarAccesibleApi.delete(`favorite/${placeId}`);
      if (data) {
        dispatch(setFavorites(data.data));
        toast.success('Favorito eliminado', {
          position: 'top-right',
          duration: 3500,
        });
      }
    } catch (err) {
      const { response } = err;
      if (response.data.msg) {
        toast.error(`${response.data.msg}`, {
          position: 'top-right',
          duration: 3500,
        });
      }
      dispatch(setErrors(response.data.msg)); // set errors
    }
  };
};
