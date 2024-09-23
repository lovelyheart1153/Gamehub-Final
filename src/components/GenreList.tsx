import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/imageUrl";
import { Button } from "./ui/button";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Genres</h2>

      {genres.map((genre) => (
        <div key={genre.id} className="flex items-center">
          <img
            src={getCroppedImage(genre.image_background)}
            alt="Image of genre"
            className="size-6 object-cover rounded"
          />
          <Button
            variant="link"
            className="font-semibold font-lg text-muted-foreground active:text-foreground active:font-bold"
          >
            {genre.name} ({genre.games_count})
          </Button>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
