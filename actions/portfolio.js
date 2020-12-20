import axios from "axios";

export function createNewPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}
