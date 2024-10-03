import useGameQuery from "@/hooks/useGameQuery";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

const GameHeading = () => {
  const { gameQuery } = useGameQuery();
  const { data: platformsData } = usePlatforms();
  const { data: genreData } = useGenres();
  const platformId = gameQuery.platformId || "";
  const genreId = gameQuery.genreId?.toString() || "";

  const platform = platformsData?.results.find(
    (item) => item.id === Number(platformId)
  );
  const genre = genreData?.results.find((item) => item.id === Number(genreId));

  return (
    <div className="text-center md:text-start mb-6 text-xl xs:text-2xl sm:text-4xl sm:font-extrabold font-semibold lg:text-6xl lg:font-extrabold">
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </div>
  );
};

export default GameHeading;
