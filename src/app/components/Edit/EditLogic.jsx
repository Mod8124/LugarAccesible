import { useDispatch, useSelector } from 'react-redux';
import { setIsModalActive } from '../../../store/auth/authSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { feedbackValidationUser } from '../../../validations/feedback.validations';
import { submitUpdate } from '../../../store/auth/thunk';

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
    submitUpdate(data);
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
