import { Game } from "@/hooks/useGames";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImage from "@/services/imageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="overflow-hidden rounded-md">
      <CardHeader className="p-0">
        <img
          className="object-cover h-[180px]"
          src={getCroppedImage(game.background_image)}
          alt="Game Thumbnail"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold mb-4">{game.name}</CardTitle>
        <div className="flex justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScoreBadge score={game.metacritic} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
