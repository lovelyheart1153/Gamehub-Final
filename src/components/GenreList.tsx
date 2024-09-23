import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
