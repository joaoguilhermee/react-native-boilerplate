import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GET_POSTS_REQUEST,
  ADD_POSTS_REQUEST,
  getPostsSuccess,
  getPostsFailure,
  addPostsSuccess,
} from './actions';
import * as posts from '~/models/posts';

export function* addPosts({ payload }) {
  try {
    const response = yield call(posts.addPost, { payload });
    yield put(addPostsSuccess(response));
  } catch (err) {}
}
export function* getPosts({ payload }) {
  try {
    const { page, filters } = payload;
    const data = yield call(posts.getPosts, page, filters);

    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailure());
  }
}

export default all([
  takeLatest(GET_POSTS_REQUEST, getPosts),
  takeLatest(ADD_POSTS_REQUEST, addPosts),
]);
