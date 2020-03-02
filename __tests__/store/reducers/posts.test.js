import reducer, { INITIAL_STATE } from '~/store/modules/posts/reducer';
import * as posts from '~/store/modules/posts/actions';

describe('Posts reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it(posts.GET_POSTS_REQUEST, () => {
    const post = {
      content: 'Content',
      title: 'Title',
      id: 25,
      userId: 3,
    };
    const state = reducer(INITIAL_STATE, posts.getPostsSuccess([post]));

    expect(state).toStrictEqual({ finished: false, list: [post] });
  });
});
