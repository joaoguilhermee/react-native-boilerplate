/* eslint-disable no-useless-catch */
import api from '~/services/api';

const getPosts = async (page, filter, userId) => {
  try {
    console.tron.log('API', page, filter);
    const response = await api.get(
      `posts${
        filter === 'voted' ? `${userId}/votes?_expand=post&` : `?`
      }_page=${page}&_limit=5`
    );
    const { data, status } = response;

    if (status === 200) {
      return data;
    }
    return [];
    // throw 'Something get wrong';
  } catch (err) {
    throw err;
  }
};

export { getPosts };
