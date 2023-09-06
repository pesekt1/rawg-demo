import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Game } from "../hooks/useGames";
import { Heading } from "@chakra-ui/layout";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={game.background_image} />
        <CardBody>
          <Heading>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
