import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { TbPencilMinus } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import { PostCommentLogic } from './logic';

export const PostComment = () => {
  const {
    setInputText,
    setActive,
    inputText,
    active,
    index,
    changeIndex,
    sendComment,
    user,
    setIndex,
  } = PostCommentLogic();

  return (
    <article>
      <div className='relative'>
        <TbPencilMinus className='absolute right-0 top1/2 text-neutral-500' />
        <input
          onChange={(event) => setInputText(event.target.value)}
          onFocus={() => setActive(true)}
          className='w-full border-b-[1px] pb-2 border-b-neutral-500 outline-none'
          type='text'
          value={inputText}
          placeholder='Añade una reseña...'
        />
      </div>
      {active && (
        <div>
          {index < 1 && <p className='text-neutral-500'>Minimo 1 estrella</p>}
          <div
            className={
              index < 1 ? 'flex gap-x-1 text-primary-900' : 'flex gap-x-1 text-primary-900 pt-2'
            }
          >
            {[1, 2, 3, 4, 5].map((number) => (
              <div key={number} onClick={() => changeIndex(number)} className='cursor-pointer'>
                {number <= index ? (
                  <AiFillStar size={20} /> // Filled star
                ) : (
                  <AiOutlineStar size={20} /> // Outline star
                )}
              </div>
            ))}
          </div>
          <div className='flex gap-x-3 pt-2'>
            <button className='text-neutral-700' onClick={() => setActive(false)}>
              Cancelar
            </button>
            <button
              disabled={index < 1}
              className='bg-primary-900 text-white px-2'
              onClick={() => {
                if (!user) {
                  return toast.error('Registrate, para poder añadir una reseña', {
                    duration: 2000,
                    position: 'top-right',
                  });
                }
                sendComment();
                setInputText('');
                setIndex(0);
                setActive(false);
              }}
            >
              Agregar
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
