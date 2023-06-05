import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Button } from '../../../../../auth/components/button';
import { Input } from '../../../../../auth/components/Input/';
import { Error } from '../../../../../auth/components/Error';
import { PasswordLogic } from './logic/PasswordLogic';
import { BiLoader } from 'react-icons/bi';

export const Password = ({ toggleActiveChangePassword }) => {
  const {
    showCurrentPassword,
    toggleShowCurrentPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    showPassword,
    toggleShowPassword,
    errors,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  } = PasswordLogic();
  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* for accessibility experice */}
        <input type='text' name='username' autoComplete='off' style={{ display: 'none' }} />
        <div className='pb-2'>
          <label className='text-neutral-700' htmlFor='name'>
            Contraseña actual
          </label>
        </div>
        <Input
          register={register}
          name='currentPassword'
          type={showCurrentPassword ? 'text' : 'password'}
          placeholder=''
          autoComplete='off'
          error={errors.currentPassword?.message}
        >
          {showCurrentPassword ? (
            <AiOutlineEye onClick={toggleShowCurrentPassword} className='cursor-pointer' />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleShowCurrentPassword} className='cursor-pointer' />
          )}
        </Input>
        <Error content={errors.currentPassword?.message}></Error>
        <div className='pb-2'>
          <label className='text-neutral-700' htmlFor='name'>
            Contraseña nueva
          </label>
        </div>
        <Input
          register={register}
          name='newPassword'
          type={showPassword ? 'text' : 'password'}
          placeholder=''
          autoComplete='new-password'
          error={errors.newPassword?.message}
        >
          {showPassword ? (
            <AiOutlineEye onClick={toggleShowPassword} className='cursor-pointer' />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleShowPassword} className='cursor-pointer' />
          )}
        </Input>
        <Error content={errors.newPassword?.message}></Error>
        <div className='pb-2'>
          <label className='text-neutral-700' htmlFor='name'>
            Confirmar contraseña
          </label>
        </div>
        <Input
          register={register}
          name='passwordConfirmation'
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder=''
          autoComplete='new-password'
          error={errors.passwordConfirmation?.message}
        >
          {showConfirmPassword ? (
            <AiOutlineEye onClick={toggleShowConfirmPassword} className='cursor-pointer' />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleShowConfirmPassword} className='cursor-pointer' />
          )}
        </Input>
        <Error content={errors.passwordConfirmation?.message}></Error>
        <div className='flex gap-x-3 h-[45px]'>
          <button
            disabled={isLoading}
            onClick={toggleActiveChangePassword}
            className='text-primary-900 basis-1/2 border-[1px] border-primary-900'
          >
            CANCELAR
          </button>
          <div className='basis-1/2'>
            <Button isDisabled={isLoading}>
              {isLoading && (
                <BiLoader className='text-white text-2xl text-center w-full animate-spin' />
              )}
              {!isLoading && 'Guardar'}
            </Button>
          </div>
        </div>
      </form>
    </article>
  );
};
