import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerValidations } from '../../../validations/register.validations';
import { submitRegister } from '../../../store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const RegisterLogic = () => {
  const dispatch = useDispatch();
  const { isLoading, isCreated } = useSelector((state) => state.auth);

  const userCreated = () => {
    toast.success('Usuario Creado, revice su correo para activar su cuenta', {
      position: 'top-right',
      duration: 5000,
    });
  };

  useEffect(() => {
    if (isCreated) {
      userCreated();
    }
  }, [isCreated]);

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidations),
  });

  // the data is already validate
  const onSubmit = (data) => {
    dispatch(submitRegister(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  };
};
