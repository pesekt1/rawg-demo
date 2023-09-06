import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameRespose {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameRespose>("games")
      .then((response) => {
        setGames(response.data.results);
        console.log(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  return { games, error };
};

export default useGames;
