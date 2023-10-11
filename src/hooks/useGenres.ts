import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("genres");

const useGenres = () => {
  const fetchGenres = () => {
    return apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
