import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Comment } from './Comment';
import { PostComment } from './PostComment';

export const Comments = () => {
  const { comments, rating } = useSelector((state) => state.detail);
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
      <PostComment />
      {comments.length > 0 && (
        <div className='pt-4 overflow-y-auto'>
          {comments.map((comment, index) => (
            <div key={comment._id}>
              <Comment comment={comment} index={index} />
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
