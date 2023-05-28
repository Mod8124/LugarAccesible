import { useForm } from 'react-hook-form';
import { feedbackValidationUser } from '../../../../../validations/feedback.validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { submitFeedback } from '../../../../../store/feedback/thunks';

export const userLogic = (changeView) => {
  const dispatch = useDispatch();

  const feedback = useSelector((state) => state.feedback);

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(feedbackValidationUser),
  });

  // the data is already validate
  const onSubmit = (data) => {
    // check the data update the keys to spanish then send it
    const feedbackEsp = {
      email: data.email,
      name: data.name,
      msg: feedback.msg,
      overallSatisfaction: feedback.overallSatisfaction,
      subject: feedback.subject,
    };
    dispatch(submitFeedback(feedbackEsp));
    changeView('thanks');
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
