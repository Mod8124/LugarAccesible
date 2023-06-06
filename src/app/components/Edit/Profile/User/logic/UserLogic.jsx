import { feedbackValidationUser } from '../../../../../../validations/feedback.validations';
import { submitUpdate } from '../../../../../../store/auth/thunk';
import { useToggle } from '../../../../../../hooks/useToggle';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const UserLogic = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const [activeChangePassword, toggleActiveChangePassword] = useToggle(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(feedbackValidationUser),
  });

  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      email: data.email,
      avatar: `https://ui-avatars.com/api/?name=${data.name}&background=002966&rounded=true&color=fff`,
    };
    dispatch(submitUpdate(newUser));
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
  };
};
