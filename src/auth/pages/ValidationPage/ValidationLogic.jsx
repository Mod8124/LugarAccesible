import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitValidation } from '../../../store/auth/thunk';
import { useParams, useNavigate } from 'react-router-dom';

export const ValidationLogic = () => {
  const { isValid } = useSelector((state) => state.auth);
  const imageBack = '/assets/images/background-validation.jpg';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      submitCode(code);
    }
  }, [code]);

  useEffect(() => {
    if (isValid) {
      userCreated();
    }
  }, [isValid]);

  const userCreated = () => {
    toast.success('Usuario Confirmado', { position: 'top-right', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/auth/login');
    }, 2500);
  };

  const submitCode = (value) => {
    dispatch(submitValidation(value));
  };

  return {
    imageBack,
  };
};
