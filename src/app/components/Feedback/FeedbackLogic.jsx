import { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { restart } from '../../../store/feedback/feedbackslice';
import { useDispatch } from 'react-redux';

export const FeedbackLogic = () => {
  const [active, toggleActive] = useToggle(false);
  const [view, setView] = useState('recommend');
  const dispatch = useDispatch();
  const changeView = (value) => {
    setView(value);
  };
  const closeView = () => {
    toggleActive();
    changeView('recommend');
    dispatch(restart());
  };

  return {
    closeView,
    changeView,
    toggleActive,
    active,
    view,
  };
};
