import { Game } from "@/hooks/useGames";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card className="overflow-hidden rounded-md">
      <CardHeader className="p-0">
        <img
          className="object-cover h-[180px]"
          src={game.background_image}
          alt="Game Thumbnail"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold mb-4">{game.name}</CardTitle>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardContent>
    </Card>
  );
};

export default GameCard;
