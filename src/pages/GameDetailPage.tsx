import CriticScoreBadge from "@/components/CriticScoreBadge";
import Entry from "@/components/Entry";
import GameAttributes from "@/components/GameAttributes";
import GameDescription from "@/components/GameDescription";
import GameTrailer from "@/components/GameTrailer";
import ScreenShots from "@/components/ScreenShots";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading } = useGame(params.slug!);

  if (!game || isLoading) return null;

  return (
    <div className="pt-[70px] px-4 max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-4 pb-8">
      <div className="">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">{game?.name}</h2>
          <GameDescription description={game?.description_raw} />
        </div>

        <div className="grid sm:grid-cols-2 gap-y-8">
          <GameAttributes title="Platforms">
            {game.parent_platforms.map(({ platform }) => (
              <Entry key={platform.id}>{platform.name}</Entry>
            ))}
          </GameAttributes>

          <GameAttributes title="Metascore">
            <CriticScoreBadge score={game.metacritic} />
          </GameAttributes>

          <GameAttributes title="Genres">
            {game.genres.map((genre) => (
              <Entry key={genre.id}>{genre.name}</Entry>
            ))}
          </GameAttributes>

          <GameAttributes title="Publishers">
            {game.publishers.map((publisher) => (
              <Entry key={publisher.id}>{publisher.name}</Entry>
            ))}
          </GameAttributes>
        </div>
      </div>

      <div className="">
        <GameTrailer gameId={parseInt(params.gameId!)} />

        <ScreenShots gameId={parseInt(params.gameId!)} />
      </div>
    </div>
  );
};

export default GameDetailPage;
