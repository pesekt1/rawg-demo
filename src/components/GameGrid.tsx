import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Image } from "@chakra-ui/image";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameRespose {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    apiClient.get<GameRespose>("games").then((response) => {
      setGames(response.data.results);
      console.log(response);
    });
  }, []);

  return (
    <>
      {games.map((game) => (
        <div key={game.id}>
          <p>{game.name}</p>
          <Image src={game.background_image} alt={game.name} />
        </div>
      ))}
    </>
  );
};

export default GameGrid;
