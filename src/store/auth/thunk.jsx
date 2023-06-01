import { setIsLoading, setErrors, setUser, setIsValid } from './authSlice';
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
