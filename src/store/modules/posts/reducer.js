import produce from 'immer';
import { GET_POSTS_SUCCESS, ADD_POSTS_REQUEST } from './actions';

export const INITIAL_STATE = {
  list: [],
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_SUCCESS: {
        draft.list = action.payload.response;
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
