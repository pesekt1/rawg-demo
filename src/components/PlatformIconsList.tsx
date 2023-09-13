import { Platform } from "../hooks/useGames";
import { Text } from "@chakra-ui/layout";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconsList;
