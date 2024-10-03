import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading } = useGame(params.slug!);

  if (isLoading) return null;

  console.log(game);

  return <div className="pt-[70px] px-4">GameDetailPage</div>;
};

export default GameDetailPage;
