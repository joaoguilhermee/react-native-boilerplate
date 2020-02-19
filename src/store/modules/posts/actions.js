export const GET_POSTS_REQUEST = '@posts/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = '@posts/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = '@posts/GET_POSTS_FAILURE';

export function getPostsRequest(data) {
  return {
    type: GET_POSTS_REQUEST,
  };
}

export function getPostsSuccess(response) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: { response },
  };
}

export function getPostsFailure() {
  return {
    type: GET_POSTS_FAILURE,
  };
}
