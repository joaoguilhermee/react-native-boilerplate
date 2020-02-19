import produce from 'immer';
import { GET_POSTS_SUCCESS } from './actions';

const INITIAL_STATE = {
  list: [],
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_SUCCESS: {
        draft.list = action.payload.response;
        break;
      }

      default:
    }
  });
}
