export const GET_POSTS_REQUEST = '@posts/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = '@posts/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = '@posts/GET_POSTS_FAILURE';
export const ADD_POSTS_REQUEST = '@posts/ADD_POSTS_REQUEST';
export const ADD_POSTS_SUCCESS = '@posts/ADD_POSTS_SUCCESS';
export const TOGGLE_POSTS_VOTE_REQUEST = '@posts/TOGGLE_POSTS_VOTE_REQUEST';

export function tooglePostsVote(id) {
  return {
    type: TOGGLE_POSTS_VOTE_REQUEST,
    payload: { id },
  };
}
export function getPostsRequest(page = 1, filters = 'all') {
  return {
    type: GET_POSTS_REQUEST,
    payload: { page, filters },
  };
}

export function addPostsRequest(request) {
  return {
    type: ADD_POSTS_REQUEST,
    payload: { request },
  };
}
export function getPostsSuccess(response) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: { response },
  };
}
export function addPostsSuccess(response) {
  return {
    type: ADD_POSTS_SUCCESS,
    payload: { response },
  };
}

export function getPostsFailure() {
  return {
    type: GET_POSTS_FAILURE,
  };
}
