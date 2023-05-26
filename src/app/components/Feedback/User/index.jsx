import { BsArrowRightShort } from 'react-icons/bs';
import { userLogic } from './logic/logic';
import { Error } from '../../../../auth/components/Error';
import { Input } from '../../../../auth/components/Input';
import { Button } from '../../../../auth/components/button';
import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';

export const FeedbackUser = ({ changeView }) => {
  const { register, handleSubmit, errors, onSubmit } = userLogic(changeView);

  return (
    <article>
      <p className='text-neutral-700 pb-6'>
        Ya casi terminamos, pero antes de que te vayas, nos <strong>encantaría</strong> saber un
        poco más <strong>sobre ti</strong>.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button>
          <div className='w-full h-full flex justify-center'>
            Siguiente <BsArrowRightShort className='text-2xl' />
          </div>
        </Button>
      </form>
    </article>
  );
};
