import APIClient, { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number;
  slug: string;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games"],
    queryFn: () => apiClient.getAll(),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
