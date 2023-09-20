import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpont: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpont)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  return { data, error, isLoading };
};

export default useData;
