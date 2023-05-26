import { setIsLoading, setErrors, setIsCreated, setUser, setLogued, setIsValid } from './authSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';

export const submitRegister = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('users/register', form);
      if (data) dispatch(setIsCreated());
      setTimeout(() => dispatch(setIsCreated()), 1000);
      dispatch(setIsLoading()); // is loading  to false
    } catch (err) {
      const { response } = err;
      dispatch(setErrors(response)); // set errors
    }
  };
};

export const submitValidation = (code) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading());
      const { data } = await LugarAccesibleApi.post(`users/validation/${code}`);
      console.log(data);
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
      const { data } = await LugarAccesibleApi.post(`users/perfil`, form);
      if (data) dispatch(setUser(data.response));
      const userString = JSON.stringify(data.response);
      sessionStorage.setItem('user', userString);
      sessionStorage.setItem('jwt', data.response.accessToken);
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading());
    }
  };
};

export const submitLogin = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading()); // is loading to true
      const { data } = await LugarAccesibleApi.post('users/login', form);
      console.log(data);
      if (!data?.status) {
        dispatch(setErrors(data?.response)); // set errors
      } else {
        const userString = JSON.stringify(data.response);
        sessionStorage.setItem('user', userString);
        sessionStorage.setItem('jwt', data.response.accessToken);
        dispatch(setUser(data.response));
        dispatch(setLogued());
      }
    } catch (error) {
      console.log(error);
      const { response } = error;
      dispatch(setErrors(response.data?.response)); // set errors
    } finally {
      dispatch(setIsLoading());
    }
  };
};
