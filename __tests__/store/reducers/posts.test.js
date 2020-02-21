import reducer, { INITIAL_STATE } from '~/store/modules/posts/reducer';
import * as posts from '~/store/modules/posts/actions';

describe('Posts reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it(posts.GET_POSTS_REQUEST, () => {
    const post = 'Node';
    const state = reducer(INITIAL_STATE, posts.addPostsRequest({ post }));

    expect(state).toStrictEqual({ list: [{ post }] });
  });
});
