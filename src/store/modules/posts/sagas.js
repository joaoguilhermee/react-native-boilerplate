import { takeLatest, call, put, all } from 'redux-saga/effects';
import { GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure } from './actions';

import api from '~/services/api';

export function* getPosts() {
  try {
    const response = yield call(api.get, 'posts?_limit=1');
    const { data, status } = response;

    if (status === 200) {
      yield put(getPostsSuccess(data));
    } else {
      throw 'Something get wrong';
    }
  } catch (err) {
    console.tron.log('err', err);
    yield put(getPostsFailure());
  }
}

export default all([takeLatest(GET_POSTS_REQUEST, getPosts)]);
