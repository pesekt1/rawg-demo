import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("platforms/lists/parents");

const usePlatforms = () => {
  const fetchPlatforms = () => {
    return apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
