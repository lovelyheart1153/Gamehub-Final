import medal from "../assets/medal.png";
import meh from "../assets/meh.png";
import thumbsup from "../assets/thumbsup.png";

interface Props {
  rating: number;
}

interface Emoji {
  src: string;
  alt: string;
}

const RatingEmoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: Emoji } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsup, alt: "thumbsup" },
    5: { src: medal, alt: "medal" },
  };

  return <img {...emojiMap[rating]} className="w-6 mt-4" />;
};

export default RatingEmoji;
