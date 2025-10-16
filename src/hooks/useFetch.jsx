import { useEffect, useState } from "react";
import { requestLocalApi } from "@libs/localApi";

const useLocalDatabase = import.meta.env.VITE_USE_LOCAL_DB === "true";

const DEFAULT_HEADERS = {
  accept: "application/json",
  ...(import.meta.env.VITE_API_TOKEN
    ? { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` }
    : {}),
};

export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          if (useLocalDatabase) {
            const data = await Promise.resolve(requestLocalApi(url));
            setData(data);
            return;
          }

          const response = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
            method,
            headers: {
              ...DEFAULT_HEADERS,
              ...headers,
            },
          });

          const data = await response.json();
          setData(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers), enabled]);

  return { isLoading, data };
}
