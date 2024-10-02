import { Game } from "../entities/Game";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImage from "@/services/imageUrl";
import RatingEmoji from "./RatingEmoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="overflow-hidden rounded-md">
      <CardHeader className="p-0">
        <img
          className="object-cover h-[150px]"
          src={getCroppedImage(game.background_image)}
          alt="Game Thumbnail"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold mb-4">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </CardTitle>
        <div className="flex justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScoreBadge score={game.metacritic} />
        </div>
        <RatingEmoji rating={game.rating_top} />
      </CardContent>
    </Card>
  );
};

export default GameCard;
