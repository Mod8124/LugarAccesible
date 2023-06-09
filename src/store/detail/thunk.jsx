import { setIsLoading, setPlace, setPlaceId, setComments, setRating } from './detailsSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';
import toast from 'react-hot-toast';

export const getDetail = (placeId) => {
  return async (dispatch) => {
    try {
      dispatch(setPlaceId(placeId));
      dispatch(setIsLoading());
      const commentsPromise = LugarAccesibleApi.get(`comment?place_id=${placeId}`);
      const detailsPromise = LugarAccesibleApi.get(`place/detail?place_id=${placeId}`);

      const [commentsResp, detailsResp] = await Promise.all([commentsPromise, detailsPromise]);

      const comments = commentsResp.data;
      const details = detailsResp.data;

      dispatch(setComments(comments.data.comments));
      dispatch(setRating(comments.data.rating));
      dispatch(setPlace(details.data[0]));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading());
    }
  };
};

export const postComment = (form) => {
  return async (dispatch) => {
    try {
      const { data: comments } = await LugarAccesibleApi.post('comment', form);
      toast.success('Comentario agregado', {
        duration: 2000,
        position: 'top-right',
      });
      dispatch(setComments(comments.data.comments));
      dispatch(setRating(comments.data.rating));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editComment = (form) => {
  return async (dispatch) => {
    try {
      const { data: comments } = await LugarAccesibleApi.post('comment/edit', form);
      toast.success('Comentario actualizado', {
        duration: 2000,
        position: 'top-right',
      });
      dispatch(setComments(comments.data.comments));
      dispatch(setRating(comments.data.rating));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteComment = (form) => {
  return async (dispatch) => {
    try {
      const { data: comments } = await LugarAccesibleApi.delete(
        `comment/delete/${form.id}/${form.place_id}`,
      );
      toast.success('Comentario borrado', {
        duration: 2000,
        position: 'top-right',
      });
      dispatch(setComments(comments.data.comments));
      dispatch(setRating(comments.data.rating));
    } catch (err) {
      console.log(err);
    }
  };
};
