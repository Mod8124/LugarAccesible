import { useSelector, useDispatch } from 'react-redux';
import { postComment } from '../../../../../../store/detail/thunk';
import { useState } from 'react';

export const PostCommentLogic = () => {
  const { placeId } = useSelector((state) => state.detail);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const changeIndex = (number) => {
    setIndex(number);
  };
  const sendComment = () => {
    const newComment = {
      place_id: placeId,
      author: user.name,
      text: inputText,
      rating: index,
    };
    dispatch(postComment(newComment));
  };

  return {
    setInputText,
    setActive,
    inputText,
    active,
    index,
    changeIndex,
    sendComment,
    user,
    setIndex,
  };
};
