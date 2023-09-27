import { Image } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating_top: number;
}

const getEmoji = (rating_top: number) => {
  switch (rating_top) {
    case 3:
      return { src: meh, alt: "Meh", boxSize: "25px" };
    case 4:
      return { src: thumbsUp, alt: "Recommended", boxSize: "25px" };
    case 5:
      return { src: bullsEye, alt: "Exeptional", boxSize: "35px" };
  }
};

const Emoji = ({ rating_top }: Props) => {
  return <Image marginTop={1} {...getEmoji(rating_top)} />;
};

export default Emoji;
