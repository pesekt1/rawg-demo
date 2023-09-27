import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
