import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerValidations } from '../../../validations/register.validations';
import { submitRegister } from '../../../store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '../../../hooks/useToggle';

export const RegisterLogic = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);
  const imageBack = '/assets/images/openMap-back.jpg';

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
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    imageBack,
  };
};
