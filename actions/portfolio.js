import axios from "axios";
import useSWR from "swr";

import { useApiHandler, fetcher } from "./index";

function createNewPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

export const useCreatePortfolio = () => useApiHandler(createNewPortfolio);

export const useGetPortfolioById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/portfolios/${id}` : null,
    fetcher
  );

  return { data, error, loading: !data && !error, ...rest };
};
