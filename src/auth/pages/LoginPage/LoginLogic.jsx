import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { loginValidations } from '../../../validations/login.validations';
import { submitLogin } from '../../../store/auth/thunk';

import { setErrors } from '../../../store/auth/authSlice';

export const LoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isLogued, errors: errorLogin } = useSelector((state) => state.auth);

  const LogInCorrect = () => {
    toast.success('¡Te has logueado exitosamente!', { position: 'top-right', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/');
    }, 2200);
  };

  useEffect(() => {
    if (errorLogin?.msn) {
      toast.error(`${errorLogin?.msn}`, { position: 'top-right', duration: 2000 });
      setTimeout(() => {
        dispatch(setErrors(null));
      }, 2000);
    }
  }, [errorLogin]);

  useEffect(() => {
    if (isLogued) {
      LogInCorrect();
      dispatch(setErrors(null));
    }
  }, [isLogued]);

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidations),
  });

  // the data is already validate
  const onSubmit = async (data) => {
    dispatch(submitLogin(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  };
};
