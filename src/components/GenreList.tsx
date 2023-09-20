import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text key={genre.id} fontSize="lg">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
