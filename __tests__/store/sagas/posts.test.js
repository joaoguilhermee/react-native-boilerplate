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

    apiMock.onGet('posts').reply(200, ['Node.js']);

    await runSaga({ dispatch }, getPosts).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPostsSuccess(['Node.js']));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('posts').reply(500);

    await runSaga({ dispatch }, getPosts).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPostsFailure());
  });
});
