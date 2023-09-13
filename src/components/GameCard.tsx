import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Game } from "../hooks/useGames";
import { Heading } from "@chakra-ui/layout";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading>{game.name}</Heading>
          <PlatformIconsList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
