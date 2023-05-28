import { feedbackValidationOverall } from '../../../../../validations/feedback.validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { setStates } from '../../../../../store/feedback/feedbackslice';
import { useDispatch, useSelector } from 'react-redux';
import { submitFeedback } from '../../../../../store/feedback/thunks';

export const overallLogic = (changeView) => {
  const numbers = [...Array(11).keys()];
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(feedbackValidationOverall),
  });

  // the data is already validate
  const onSubmit = (data) => {
    if (user) {
      const feedbackEsp = {
        email: user.email,
        name: user.name,
        msg: data.msg,
        overallSatisfaction: data.overallSatisfaction,
        subject: data.subject,
      };
      dispatch(submitFeedback(feedbackEsp));
      changeView('thanks');
      return;
    }
    dispatch(setStates(data));
    changeView('user');
  };

  return {
    numbers,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
