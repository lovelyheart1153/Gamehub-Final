import APIClient, { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";

export interface Platform {
  id: number;
  name: string;
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
