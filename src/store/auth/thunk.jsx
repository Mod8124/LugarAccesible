import { setIsLoading, setErrors, setUser, setLogued, setIsValid } from './authSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';
import { toast } from 'react-hot-toast';

export const submitRegister = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('user/register', form);
      if (data) {
        toast.success('¡Te has registrado exitosamente!', {
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
      const { data } = await LugarAccesibleApi.post(`user/validation/${code}`);
      if (data) dispatch(setIsValid());
      setTimeout(() => dispatch(setIsValid()), 1000);
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading());
    }
  };
};

export const submitUpdate = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const { data } = await LugarAccesibleApi.post(`user/update`, form);
      console.log(data, form, 'eso');
      if (data) dispatch(setUser(data.data));
      const userString = JSON.stringify(data.data);
      sessionStorage.setItem('user', userString);
    } catch (err) {
      console.log(err);
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
        dispatch(setLogued());
      }
    } catch (err) {
      const { response } = err;
      dispatch(setErrors(response.data.msg)); // set errors
    } finally {
      dispatch(setIsLoading());
    }
  };
};
