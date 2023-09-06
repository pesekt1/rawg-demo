import { Image } from "@chakra-ui/image";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
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
