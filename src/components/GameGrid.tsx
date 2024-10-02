import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Loader2 } from "lucide-react";

const GameGrid = () => {
  const skeletons = Array.from({ length: 20 }, (_, index) => index);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames();

  const { ref, inView } = useInView();

  if (error) return <p>{error.message}</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div ref={ref} className="w-full grid place-items-center my-4">
        {isFetchingNextPage && (
          <Loader2 className="animate-spin text-primary" />
        )}
      </div>
    </>
  );
};

export default GameGrid;
