import produce from 'immer';
import { GET_POSTS_SUCCESS, ADD_POSTS_REQUEST } from './actions';

export const INITIAL_STATE = {
  list: [],
  finished: false,
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_SUCCESS: {
        const {  response } = action.payload;
        if (response.length === 0) {
          draft.finished = true;
        }
        draft.list = [...draft.list, ...response];
   
        break;
      }
      case ADD_POSTS_REQUEST: {
        draft.list.push(action.payload.request);
        break;
      }

      default:
    }
  });
}
