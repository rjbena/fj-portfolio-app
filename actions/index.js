import useSWR from "swr";
import { useState } from "react";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/v1/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

export function useApiHandler(apiCallback) {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false,
  });
  const handler = async (...data) => {
    setReqState({ error: null, data: null, loading: true });
    try {
      const json = await apiCallback(...data);
      setReqState({ error: null, data: json.data, loading: false });
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        "Error, Something went wrong!";
      setReqState({ error: message, data: null, loading: false });
    }
  };

  return [handler, { ...reqState }];
}
