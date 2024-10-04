import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/imageUrl";
import { Button } from "./ui/button";
import useGameQuery from "@/hooks/useGameQuery";
import { useState } from "react";
import { cn } from "@/lib/utils";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  const { dispatch, gameQuery } = useGameQuery();
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  if (error) return null;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Genres</h2>

      {genres?.results.map((genre) => (
        <div key={genre.id} className="flex items-center">
          <img
            src={getCroppedImage(genre.image_background)}
            alt="Image of genre"
            className="size-6 object-cover rounded"
          />
          <Button
            onClick={() => {
              setSelectedGenre(genre.id);
              dispatch({ type: "FILTER_BY_GENRE", genreId: genre.id });
            }}
            variant="link"
            className={cn(
              "font-semibold font-lg text-muted-foreground",
              genre.id === selectedGenre && "font-extrabold text-foreground"
            )}
          >
            {genre.name} ({genre.games_count})
          </Button>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
