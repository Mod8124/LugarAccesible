import LugarAccesibleApi from '../../api/LugarAccesibleApi';
import { restart } from './feedbackslice';

export const submitFeedback = (feedbackData) => async (dispatch) => {
  try {
    const response = await LugarAccesibleApi.post('feedback', feedbackData);
    if (response.status !== 200) {
      throw new Error('Failed to submit feedback');
    }
    // restart the state don't matter what xd
    dispatch(restart());
  } catch (error) {
    console.log(error);
    dispatch(restart());
  }
};
