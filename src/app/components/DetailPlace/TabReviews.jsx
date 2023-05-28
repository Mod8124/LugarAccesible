import React, { useState } from 'react';
import { TbPencilMinus } from 'react-icons/tb';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { postComment } from '../../../store/detail/thunk';

export default function TabReviews() {
  const { rating, comments, placeId } = useSelector((state) => state.detail);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const changeIndex = (number) => {
    setIndex(number);
  };
  const sendComment = () => {
    const newComment = { place_id: placeId, author: user.name, text: inputText, rating: index };
    console.log(newComment);
    dispatch(
      postComment({
        place_id: placeId,
        author: user.name,
        text: inputText,
        rating: index,
      }),
    );
  };
  return (
    <article className='pt-3'>
      <p className='text-start text-neutral-700 pb-3'>
        Reseñas <strong className='text-primary-900'>({rating})</strong>
      </p>

      <div className='relative'>
        <div className='flex gap-x-1 text-primary-900 pb-2'>
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
        <div className='flex gap-x-3 mt-2'>
          <button className='text-neutral-700' onClick={() => setActive(false)}>
            Cancelar
          </button>
          <button
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
            Añadir
          </button>
        </div>
      )}
      {comments.length > 0 && (
        <div className='pt-4 h-[40vh] overflow-y-auto'>
          {comments.map((comment) => (
            <div key={comment._id} className='pt-3 pb-3 border-b-[1px] border-b-neutral-100'>
              <div className='flex gap-x-1 text-primary-900 pb-2'>
                {[1, 2, 3, 4, 5].map((number) => (
                  <div key={number}>
                    {number <= comment.rating ? (
                      <AiFillStar size={20} /> // Filled star
                    ) : (
                      <AiOutlineStar size={20} /> // Outline star
                    )}
                  </div>
                ))}
              </div>
              <h5 className='text-neutral-700 pb-2'>{comment.author}</h5>
              <div className='text-neutral-500 pb-3'>
                <p>{comment.text}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
