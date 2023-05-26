import { BsArrowRightShort } from 'react-icons/bs';
import { overallLogic } from './logic/logic';
import { Error } from '../../../../auth/components/Error';
import { Button } from '../../../../auth/components/button';
import { Input } from '../../../../auth/components/Input';
import { MdTitle } from 'react-icons/md';
import { GrTextAlignFull } from 'react-icons/gr';

export const FeedBackOverall = ({ changeView }) => {
  const { numbers, register, handleSubmit, errors, onSubmit } = overallLogic(changeView);

  return (
    <div data-testid='feedback-overall'>
      <p className='text-neutral-500 pb-7'>
        No te limites, bien o mal, <strong>dínoslo</strong> Por favor, ayúdanos a mejorar
        <strong> compartiendo</strong> tus comentarios sobre tu experiencia con la aplicación de
        <strong> accesibilidad.</strong>
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='text-neutral-500'>
          ¿Está satisfecho/a con el rendimiento y la funcionalidad de la aplicación?
        </label>
        <div className='text-neutral-500 flex justify-between pt-4 pb-4'>
          <p>Muy improbable</p>
          <p>Muy probable</p>
        </div>

        <div className='flex justify-between'>
          {numbers.map((num) => (
            <div className='flex flex-col gap-y-2 text-neutral-700' key={num}>
              <input
                type='radio'
                value={num}
                name='OverallSatisfaction'
                {...register('overallSatisfaction')}
                className={
                  errors.overallSatisfaction?.message &&
                  'appearance-none h-[13px] w-[13px] rounded-full border-[1px] border-alert-error'
                }
              />
              <span className='text-neutral-700'>{num}</span>
            </div>
          ))}
        </div>
        <Error content={errors.overallSatisfaction?.message}></Error>
        <Input
          register={register}
          name='subject'
          type='text'
          placeholder='Asunto'
          autoComplete='off'
          error={errors.subject?.message}
        >
          <MdTitle />
        </Input>

        <Error content={errors.subject?.message}></Error>

        <div className='relative w-full'>
          <textarea
            className={
              errors.msg?.message
                ? 'border-[1px] border-alert-error w-full px-3 pt-3 min-h-[160px] placeholder:text-neutral-500  outline-0 text-neutral-900 resize-none'
                : 'border-[1px] border-neutral-500 w-full px-3 pt-3 min-h-[160px] placeholder:text-neutral-500 outline-0 text-neutral-900  resize-none'
            }
            placeholder='Mensaje'
            {...register('msg')}
          ></textarea>
          <GrTextAlignFull className='absolute right-4 top-3 text-neutral-500 text-2xl' />
        </div>
        <Error content={errors.msg?.message}></Error>

        <Button>
          <div className='w-full h-full flex justify-center'>
            Siguiente <BsArrowRightShort className='text-2xl' />
          </div>
        </Button>
      </form>
    </div>
  );
};
