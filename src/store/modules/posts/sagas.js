import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure } from './actions';

import * as posts from '~/models/posts';

export function* getPosts() {
  try {
    const data = yield call(posts.getAll);
    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailure());
  }
}

export default all([takeLatest(GET_POSTS_REQUEST, getPosts)]);
