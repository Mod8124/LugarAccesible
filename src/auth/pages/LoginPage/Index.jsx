import { useToggle } from '../../../hooks/useToggle';
import { LoginLogic } from './LoginLogic';
import { Input } from '../../components/Input/';
import { Form } from '../../components/Form';
import { Link } from 'react-router-dom';
import { Error } from '../../components/Error';
import { Button } from '../../components/button';
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import logoWeb from '/assets/logo/logo.svg';

const LoginPage = () => {
  const { register, handleSubmit, errors, onSubmit, isLoading } = LoginLogic();
  const [showPassword, toggleShowPassword] = useToggle(false);
  const imageBack = '/assets/images/background-login.jpg';

  return (
    <main className='flex min-h-screen flex-wrap'>
      <section
        className='basis-full flex justify-center items-center lg:justify-normal lg:items-baseline lg:basis-1/2 bg-cover bg-center '
        style={{ backgroundImage: `url(${imageBack})` }}
      >
        <figure className='lg:p-11'>
          <Link to='/'>
            <img src={logoWeb} alt='logo de la web LugarAccesible' className='w-[250px]' />
          </Link>
        </figure>
      </section>
      <section className='flex basis-full lg:basis-1/2 items-center justify-center'>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          title='Iniciar sesión'
          paragraph='Accede a tu cuenta para manejar y controlar tus rutas.'
        >
          <Input
            register={register}
            name='email'
            type='text'
            placeholder='correo@correo.com'
            autoComplete='email'
            error={errors.email?.message}
          >
            <AiOutlineMail />
          </Input>
          <Error content={errors.email?.message}></Error>
          <Input
            register={register}
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='**********'
            autoComplete='new-password'
            error={errors.password?.message}
          >
            {showPassword ? (
              <AiOutlineEye onClick={toggleShowPassword} className='cursor-pointer' />
            ) : (
              <AiOutlineEyeInvisible onClick={toggleShowPassword} className='cursor-pointer' />
            )}
          </Input>
          <Error content={errors.password?.message}></Error>

          <Button isDisabled={isLoading}>
            {isLoading ? (
              <AiOutlineLoading3Quarters className='animate-spin w-full text-pk' />
            ) : (
              'Iniciar Sesión'
            )}
          </Button>
          <p className='w-full text-neutral-500 py-3'>
            ¿No tienes una cuenta?
            <Link to='/auth/register' className='text-neutral-700 font-bold'>
              {' '}
              Regístrate
            </Link>
          </p>
        </Form>
      </section>
    </main>
  );
};

export default LoginPage;
