import APIClient, { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import { GameQuery } from "@/reducers/gameQueryReducer";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
