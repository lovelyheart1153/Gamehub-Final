// import { genres } from "@/data/genres";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    // initialData: { count: genres.length, results: genres },
  });

export default useGenres;
