import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { TbPencilMinus } from 'react-icons/tb';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { postComment, editComment, deleteComment } from '../../../../store/detail/thunk';

export const Comments = () => {
  const { rating, comments, placeId, isLoadingComment } = useSelector((state) => state.detail);
  console.log(comments);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [indexComment, setIndexComment] = useState(0);
  const [starComment, setStarComment] = useState(0);
  const [commentText, setCommentText] = useState('');

  const handleEditClick = (index, comment) => {
    setCommentText(comment.text);
    setStarComment(comment.rating);
    setIndexComment(index);
    setEditMode(true);
  };

  const changeSetCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const changeIndex = (number) => {
    setIndex(number);
  };
  const sendComment = () => {
    const newComment = {
      place_id: '70fe5d60-ef38-4580-87c5-a07f4f2803c4',
      author: user.name,
      text: inputText,
      rating: index,
    };
    dispatch(postComment(newComment));
  };

  const sendEditComment = (_id) => {
    const newEditComment = {
      id: _id,
      place_id: '70fe5d60-ef38-4580-87c5-a07f4f2803c4',
      author: user.name,
      text: commentText,
      rating: starComment,
    };
    dispatch(editComment(newEditComment));
  };

  const sendDeleteComment = (id) => {
    const newDeleteComment = {
      id,
      place_id: '70fe5d60-ef38-4580-87c5-a07f4f2803c4',
    };
    dispatch(deleteComment(newDeleteComment));
  };

  return (
    <article className='pt-5'>
      <div className='flex gap-x-2 items-center pb-4'>
        <strong>({rating})</strong>
        <div className='flex gap-x-1 text-primary-900 items-center'>
          {[1, 2, 3, 4, 5].map((number) => (
            <div key={number}>
              {number <= rating ? (
                <AiFillStar size={20} /> // Filled star
              ) : (
                <AiOutlineStar size={20} /> // Outline star
              )}
            </div>
          ))}
        </div>
      </div>

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
      {comments.length > 0 && (
        <div className='pt-4 overflow-y-auto'>
          {comments.map((comment, index) => (
            <div key={comment._id} className='pt-3 pb-3 border-b-[1px] border-b-neutral-100'>
              {editMode && indexComment === index ? (
                <div className='flex gap-x-1 text-primary-900 pb-2'>
                  {[1, 2, 3, 4, 5].map((number) => (
                    <div key={number} onClick={() => setStarComment(number)}>
                      {number <= starComment ? (
                        <AiFillStar size={20} /> // Filled star
                      ) : (
                        <AiOutlineStar size={20} /> // Outline star
                      )}
                    </div>
                  ))}
                </div>
              ) : (
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
              )}
              <h5 className='text-neutral-700 pb-2'>{comment.author}</h5>
              <div className='text-neutral-500 pb-3'>
                {editMode && indexComment === index ? (
                  <input
                    className='outline-none w-full text-neutral-700 bg-neutral-100'
                    value={commentText}
                    onChange={changeSetCommentText}
                    autoFocus
                  />
                ) : (
                  <input className='outline-none' value={comment.text} readOnly />
                )}
              </div>
              {comment.owner && (
                <>
                  {!editMode && (
                    <div className='text-primary-900 flex gap-x-2'>
                      <FaEdit
                        onClick={() => {
                          handleEditClick(index, comment);
                        }}
                      />
                      <FaTrash
                        onClick={() => {
                          sendDeleteComment(comment._id);
                        }}
                      />
                    </div>
                  )}
                  {editMode && indexComment === index && (
                    <div className='flex gap-x-3'>
                      <button className='text-neutral-700' onClick={() => setEditMode(false)}>
                        Cancelar
                      </button>
                      <button
                        className='bg-primary-900 text-white px-2'
                        onClick={() => {
                          sendEditComment(comment._id);
                          setEditMode(false);
                          toast.success('Comentario actualizado', {
                            duration: 1500,
                            position: 'top-right',
                          });
                        }}
                      >
                        Agregar
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
