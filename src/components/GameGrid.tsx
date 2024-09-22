import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

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
