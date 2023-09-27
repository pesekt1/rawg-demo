import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Game } from "../hooks/useGames";
import { Heading } from "@chakra-ui/layout";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack wrap="wrap" justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((pp) => pp.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading>
            {game.name}
            <Emoji rating_top={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
