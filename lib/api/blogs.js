import axios from "axios";

const API_URL = `${process.env.API_URL}/blogs`;

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogByUser = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/me`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewBlog = (data, accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.post(API_URL, data, config);
};

export const updateBlog = (id, data, accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.patch(`${API_URL}/${id}`, data, config);
};

export const deleteBlog = (id, accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.delete(`${API_URL}/${id}`, config);
};

export const getBySlug = async (slug) => {
  const { data } = await axios.get(`${API_URL}/s/${slug}`);
  return data;
};
