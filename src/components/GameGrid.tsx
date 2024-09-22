import axiosInstance from "@/services/apiClient";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosInstance
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError((error as Error).message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
};

export default GameGrid;
