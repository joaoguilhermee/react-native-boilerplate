import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import {
  getPostsSuccess,
  getPostsFailure,
} from '~/store/modules/posts/actions';
import { getPosts } from '~/store/modules/posts/sagas';

const apiMock = new MockAdapter(api);

describe('Posts saga', () => {
  it('should be able to fetch posts', async () => {
    const dispatch = jest.fn();
    const post = {
      content: 'Content',
      title: 'Title',
      id: 25,
      userId: 3,
    };

    const page = 1;
    apiMock
      .onGet(`posts/?_page=${page}&_limit=5&_order=desc&_sort=id`)
      .reply(200, [post]);

    await runSaga({ dispatch }, getPosts, {
      payload: { page },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPostsSuccess([post]));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('posts').reply(500);

    await runSaga({ dispatch }, getPosts, {
      page: 1,
      filters: 'all',
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPostsFailure());
  });
});
