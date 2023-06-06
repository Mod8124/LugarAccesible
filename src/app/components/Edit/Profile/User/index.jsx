import { CiUser } from 'react-icons/ci';
import { BiLoader } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Input } from '../../../../../auth/components/Input';
import { Error } from '../../../../../auth/components/Error';
import { Button } from '../../../../../auth/components/button';
import { UserLogic } from './logic/UserLogic';

export const User = ({ toggleActiveChangePassword }) => {
  const { user, errors, isLoading, handleSubmit, onSubmit, register } = UserLogic();
  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-2'>
          <label className='text-neutral-700' htmlFor='name'>
            Nombre de usuario:
          </label>
        </div>
        <Input
          register={register}
          name='name'
          type='text'
          placeholder='Nombre'
          autoComplete='off'
          value={user.name}
          error={errors.name?.message}
        >
          <CiUser />
        </Input>
        <Error content={errors.name?.message}></Error>
        <div className='pb-2'>
          <label className='text-neutral-700' htmlFor='name'>
            Correo electrónico
          </label>
        </div>
        <Input
          register={register}
          name='email'
          type='text'
          placeholder='Email'
          autoComplete='email'
          value={user.email}
          error={errors.email?.message}
        >
          <AiOutlineMail />
        </Input>
        <Error content={errors.email?.message}></Error>
        <div className='pb-2 '>
          <label className='text-neutral-700' htmlFor='name'>
            Contraseña
          </label>
        </div>
        <div className='relative w-full pb-5'>
          <input
            type='text'
            value='**********'
            onClick={toggleActiveChangePassword}
            readOnly
            className='w-full cursor-pointer px-3 min-h-[45px] placeholder:text-neutral-500 outline-0 text-neutral-900 border-[1px] border-neutral-500'
          />
          <div className='absolute right-4 top-3 text-neutral-500 text-2xl'>
            <RiLockPasswordLine />
          </div>
        </div>
        <Button isDisabled={isLoading}>
          {isLoading && (
            <BiLoader className='text-white text-2xl text-center w-full animate-spin' />
          )}
          {!isLoading && 'Actualizar perfil'}
        </Button>
      </form>
    </article>
  );
};
