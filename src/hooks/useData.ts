import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpont: string, selectedGenre?: Genre | null) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpont, {
        signal: controller.signal,
        params: { genres: selectedGenre?.id },
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
  }, [selectedGenre?.id]);

  return { data, error, isLoading };
};

export default useData;
