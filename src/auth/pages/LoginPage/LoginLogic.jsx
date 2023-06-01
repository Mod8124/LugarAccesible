import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginValidations } from '../../../validations/login.validations';
import { submitLogin } from '../../../store/auth/thunk';

export const LoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, user } = useSelector((state) => state.auth);

  const LogInCorrect = () => {
    toast.success('¡Te has logueado exitosamente!', { position: 'top-right', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/');
    }, 2200);
  };

  useEffect(() => {
    if (user) {
      LogInCorrect();
    }
  }, [user]);

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
