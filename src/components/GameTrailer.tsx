import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailers(gameId);
  const first = data?.results[0];

  return (
    <video
      className="mb-4"
      src={first?.data[480]}
      poster={first?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
