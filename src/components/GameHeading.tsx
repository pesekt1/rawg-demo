import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const genre = data?.results.find((genre) => genre.id === gameQuery.genreId);

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${genre?.name || ""} ${gameQuery.platform?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
