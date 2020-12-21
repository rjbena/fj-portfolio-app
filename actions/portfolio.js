import axios from "axios";

import { useApiHandler } from "./index";

function createNewPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

export const useCreatePortfolio = () => useApiHandler(createNewPortfolio);
