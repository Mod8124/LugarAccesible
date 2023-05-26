import { ModalSide } from '../Modal-Side';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { Input } from '../../../auth/components/Input';
import { Error } from '../../../auth/components/Error';
import { CiUser } from 'react-icons/ci';
import { Button } from '../../../auth/components/button';
import { BiLoader } from 'react-icons/bi';
import { EditLogic } from './EditLogic';

export const Edit = () => {
  const {
    isModalActive,
    view,
    toggleModal,
    handleSubmit,
    onSubmit,
    register,
    user,
    errors,
    isLoading,
    favorites,
  } = EditLogic();
  return (
    <>
      {isModalActive && (
        <ModalSide
          title={view === 'edit' ? 'Editar pefil' : 'Tus favoritos'}
          toggleActive={toggleModal}
        >
          {view === 'edit' && (
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
                    Correo Electronico
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
                <Button>
                  {isLoading && (
                    <BiLoader className='text-white text-2xl text-center w-full animate-spin' />
                  )}
                  {!isLoading && 'Actualizar perfil'}
                </Button>
              </form>
            </article>
          )}
          {view === 'favorite' && (
            <article className='w-full'>
              {favorites.length === 0 && (
                <div>
                  <h3 className='flex gap-x-3 items-center text-pd text-neutral-700'>
                    <AiOutlineHeart className='text-alert-error text-2xl' /> No tienes lugares
                    favoritos
                  </h3>
                  <p className='text-neutral-500 pt-4'>
                    Tus lugares favoritos están vacíos, descubre todo los lugares accesible que
                    tienes cerca de ti.
                  </p>
                </div>
              )}
            </article>
          )}
        </ModalSide>
      )}
    </>
  );
};
