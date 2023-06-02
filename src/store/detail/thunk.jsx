import { setIsLoading, setPlace, setPlaceId, setComments, setRating } from './detailsSlice';
import LugarAccesibleApi from '../../api/LugarAccesibleApi';

export const getDetail = (placeId) => {
  console.log(placeId);
  return async (dispatch) => {
    try {
      dispatch(setPlaceId(placeId));
      dispatch(setIsLoading());
      const commentsPromise = LugarAccesibleApi.get(
        `comment?place_id=${'70fe5d60-ef38-4580-87c5-a07f4f2803c4'}`,
      );
      const detailsPromise = LugarAccesibleApi.get(`place/detail/mock?place_id=${placeId}`);

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
      dispatch(setComments(comments.data.comments));
      dispatch(setRating(comments.data.rating));
    } catch (err) {
      console.log(err);
    }
  };
};
