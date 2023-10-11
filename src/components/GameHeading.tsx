import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genreData } = useGenres();
  const genre = genreData?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  const { data: platformData } = usePlatforms();
  const platform = platformData?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
