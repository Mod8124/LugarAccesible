import { AiOutlineMail } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { submitValidation } from '../../../store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const ValidationPage = () => {
  const { isValid } = useSelector((state) => state.auth);
  const imageBack = '/assets/images/background-validation.jpg';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userCreated = () => {
    toast.success('Usuario Confirmado', { position: 'top-right', duration: 2000 });

    // redirect the user after the user have created
    setTimeout(() => {
      navigate('/auth/login');
    }, 2500);
  };

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

  const submitCode = (value) => {
    dispatch(submitValidation(value));
  };

  return (
    <main
      className='basis-full h-screen w-full flex justify-center items-center lg:justify-normal lg:items-baseline lg:basis-1/2 bg-cover bg-center'
      style={{ backgroundImage: `url(${imageBack})` }}
    >
      <section className='w-[90%] m-auto max-w-[700px] flex-col flex items-center h-[90%] max-h-[440px]'>
        <picture>
          <img src='/public/assets/logo/logo.svg' alt='logo' />
        </picture>
        <article className='bg-white h-full w-full flex items-center mt-9'>
          <div>
            <div className='flex justify-center'>
              <div className='bg-primary-900 w-[80px] h-[80px] flex items-center justify-center rounded-full'>
                <AiOutlineMail className='text-[3em] text-white' />
              </div>
            </div>
            <h1 className='font-bold text-primary-900 text-[30px] pt-6 text-center'>
              Tu cuenta ha sido verificada
            </h1>
            <p className='text-center pt-6 text-neutral-500 break-words w-[80%] m-auto'>
              Muchas gracias por confirmar tu cuenta en LugarAccesible, ahora puedes iniciar sesión.
              Seras redirecionado en breve.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
