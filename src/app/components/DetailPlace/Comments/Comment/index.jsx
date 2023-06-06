import { FaEdit, FaTrash } from 'react-icons/fa';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { CommentLogic } from './logic/CommentLogic';

export const Comment = ({ comment, index }) => {
  const {
    editMode,
    indexComment,
    starComment,
    setStarComment,
    commentText,
    changeSetCommentText,
    handleEditClick,
    sendDeleteComment,
    setEditMode,
    sendEditComment,
  } = CommentLogic();
  return (
    <div className='pt-3 pb-3 border-b-[1px] border-b-neutral-100'>
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
                className='cursor-pointer'
                onClick={() => {
                  handleEditClick(index, comment);
                }}
              />
              <FaTrash
                className='cursor-pointer'
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
                }}
              >
                Agregar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
