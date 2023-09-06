import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/layout";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
