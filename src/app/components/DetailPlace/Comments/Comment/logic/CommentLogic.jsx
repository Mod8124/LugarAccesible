import { useSelector, useDispatch } from 'react-redux';
import { editComment, deleteComment } from '../../../../../../store/detail/thunk';
import { useState } from 'react';

export const CommentLogic = () => {
  const { placeId } = useSelector((state) => state.detail);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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

  const sendEditComment = (_id) => {
    const newEditComment = {
      id: _id,
      place_id: placeId,
      author: user.name,
      text: commentText,
      rating: starComment,
    };
    dispatch(editComment(newEditComment));
  };

  const sendDeleteComment = (id) => {
    const newDeleteComment = {
      id,
      place_id: placeId,
    };
    dispatch(deleteComment(newDeleteComment));
  };

  return {
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
  };
};
