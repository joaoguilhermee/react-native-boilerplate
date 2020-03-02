/* eslint-disable no-useless-catch */
import api from '~/services/api';

const addPost = async ({ payload }) => {
  try {
    const { content, title } = payload.request;
    const response = await api.post(`posts`, { content, title, userId: 3 });

    const { data, status } = response;

    if (status === 200 || status === 201) {
      return data;
    }
  } catch (error) {}
};
const getPosts = async (page, filter, userId) => {
  try {
    const response = await api.get(
      `posts/?_page=${page}&_limit=5&_order=desc&_sort=id`
    );
    const { data, status } = response;

    if (status === 200 || status === 201) {
      return data;
    }
    return [];
    // throw 'Something get wrong';
  } catch (err) {
    throw err;
  }
};

export { getPosts, addPost };
