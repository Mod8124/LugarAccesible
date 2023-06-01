import { CiUser } from 'react-icons/ci';
import { RegisterLogic } from './RegisterLogic';
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

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    imageBack,
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
  } = RegisterLogic();

  return (
    <main className='flex min-h-screen flex-wrap'>
      <section
        className='basis-full flex justify-center items-center lg:justify-normal lg:items-baseline lg:basis-1/2 bg-cover bg-center'
        style={{ backgroundImage: `url(${imageBack})` }}
      >
        <figure className='lg:p-11'>
          <Link to='/'>
            <img src='/assets/logo/logo.svg' alt='logo LugarAccesible' />
          </Link>
        </figure>
      </section>
      <section className='flex basis-full lg:basis-1/2 items-center justify-center'>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          title='Crear Cuenta'
          paragraph='Información sobre la accesibilidad de lugares cercanos a ti.'
        >
          <Input
            register={register}
            name='name'
            type='text'
            placeholder='Nombre'
            autoComplete='off'
            error={errors.name?.message}
          >
            <CiUser />
          </Input>
          <Error content={errors.name?.message}></Error>
          <Input
            register={register}
            name='email'
            type='text'
            placeholder='Email'
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
            placeholder='Contraseña'
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
          <Input
            register={register}
            name='passwordConfirmation'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirmar Contraseña'
            autoComplete='new-password'
            error={errors.passwordConfirmation?.message}
          >
            {showConfirmPassword ? (
              <AiOutlineEye onClick={toggleShowConfirmPassword} className='cursor-pointer' />
            ) : (
              <AiOutlineEyeInvisible
                onClick={toggleShowConfirmPassword}
                className='cursor-pointer'
              />
            )}
          </Input>
          <Error content={errors.passwordConfirmation?.message}></Error>
          <p className='w-full text-neutral-500 pb-5'>
            Al crear una cuenta, aceptas la{' '}
            <strong className='text-neutral-700'>Política de privacidad</strong> y los{' '}
            <strong className='text-neutral-700'>Términos de uso</strong> de LugarAccesible.
          </p>
          <Button isDisabled={isLoading}>
            {isLoading ? (
              <AiOutlineLoading3Quarters className='animate-spin w-full text-pk' />
            ) : (
              'Registrarse'
            )}
          </Button>
          <p className='w-full text-neutral-500 py-3'>
            ¿Ya tienes cuenta?
            <Link to='/auth/login' className='text-neutral-700 font-bold'>
              {' '}
              Iniciar Sección
            </Link>
          </p>
        </Form>
      </section>
    </main>
  );
};

export default RegisterPage;
