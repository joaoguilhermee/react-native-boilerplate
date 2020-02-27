import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure } from './actions';

import * as posts from '~/models/posts';

export function* getPosts({ payload }) {
  try {
    console.tron.log('payload', payload);
    const { page, filters } = payload;
    const data = yield call(posts.getPosts, page, filters);
    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailure());
  }
}

export default all([takeLatest(GET_POSTS_REQUEST, getPosts)]);
