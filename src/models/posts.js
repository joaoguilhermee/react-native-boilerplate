/* eslint-disable no-useless-catch */
import api from '~/services/api';

const getAll = async () => {
  try {
    // ?_limit=1
    const response = await api.get('posts');
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

export { getAll };
