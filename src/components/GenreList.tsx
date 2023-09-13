import { HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <HStack>
          <Image src={genre.image_background} boxSize="32px" borderRadius={8} />
          <Text key={genre.id}>{genre.name}</Text>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;
