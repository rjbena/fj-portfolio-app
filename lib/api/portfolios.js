import axios from "axios";

const API_URL = `${process.env.API_URL}/portfolios/`;

export const getAllPortfolios = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPortflioById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPortfolio = (data, accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.post(API_URL, data, config);
};
