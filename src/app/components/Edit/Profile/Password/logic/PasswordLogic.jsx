import { passwordValidation } from '../../../../../../validations/password.validations';
import { submitUpdatePassword } from '../../../../../../store/auth/thunk';
import { useToggle } from '../../../../../../hooks/useToggle';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const PasswordLogic = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const [activeChangePassword, toggleActiveChangePassword] = useToggle(false);
  const [showCurrentPassword, toggleShowCurrentPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);
  const [showPassword, toggleShowPassword] = useToggle(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidation),
  });

  const resetForm = () => {
    reset();
  };

  const onSubmit = (data) => {
    dispatch(submitUpdatePassword(data, resetForm));
  };

  return {
    user,
    isLoading,
    errors,
    activeChangePassword,
    toggleActiveChangePassword,
    register,
    handleSubmit,
    onSubmit,
    showCurrentPassword,
    toggleShowCurrentPassword,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  };
};
