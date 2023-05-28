import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive } from '../../../store/auth/authSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { feedbackValidationUser } from '../../../validations/feedback.validations';
import { submitUpdate } from '../../../store/auth/thunk';
import { toast } from 'react-hot-toast';

export const EditLogic = () => {
  const { isModalActive, view, favorites, user, isLoading } = useSelector((state) => state.auth);
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
    toast.success('Perfil actualizado', {
      position: 'top-right',
      duration: 3000,
    });
  };

  const toggleModal = () => {
    dispatch(setIsModalActive());
  };
  return {
    isModalActive,
    view,
    user,
    favorites,
    isLoading,
    errors,
    register,
    handleSubmit,
    toggleModal,
    onSubmit,
  };
};
