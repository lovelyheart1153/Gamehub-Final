import useScreenShots from "@/hooks/useScreenShots";

interface Props {
  gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
  const { data } = useScreenShots(gameId);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {data?.results.map((screenshot) => (
        <img
          className="rounded hover:scale-105 transition"
          key={screenshot.id}
          src={screenshot.image}
          alt="Game Screenshot"
        />
      ))}
    </div>
  );
};

export default ScreenShots;
