import { useEffect, useState } from "react";
import apiClient, { FetchResponse } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

//selectedGenre?: Genre | null
const useData = <T>(
  endpont: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpont, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
          console.log(response);
        })
        .catch((error) => {
          if (!(error instanceof CanceledError)) setError(error.message);
        });

      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
