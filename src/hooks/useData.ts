import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpont: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpont, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        if (!(error instanceof CanceledError)) setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
