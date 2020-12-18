import axios from "axios";

export const getAllPortfolios = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3001/api/v1/portfolios/"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
