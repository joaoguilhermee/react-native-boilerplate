import produce from 'immer';
import {
  GET_POSTS_SUCCESS,
  ADD_POSTS_SUCCESS,
  GET_POSTS_REQUEST,
  TOGGLE_POSTS_VOTE_REQUEST,
} from './actions';

export const INITIAL_STATE = {
  list: [],
  finished: false,
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_REQUEST: {
        if (action.payload.page === 1) {
          draft.list = [];
        }
        break;
      }
      case GET_POSTS_SUCCESS: {
        const { response } = action.payload;
        if (response.length === 0) {
          draft.finished = true;
        } else {
          draft.list = [...draft.list, ...response];
        }
        break;
      }
      case TOGGLE_POSTS_VOTE_REQUEST: {
        draft.list = draft.list.map(item => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            active: !item.active,
          };
        });

        break;
      }
      case ADD_POSTS_SUCCESS: {
        draft.list = [action.payload.response, ...draft.list];
        break;
      }
      default:
    }
  });
}
