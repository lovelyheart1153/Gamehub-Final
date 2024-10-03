import { Game } from "@/entities/Game";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useGame = (gameSlug: string) => {
  const apiClient = new APIClient<Game>("/games/" + gameSlug);

  return useQuery({
    queryKey: ["games", gameSlug],
    queryFn: () => apiClient.get(),
  });
};

export default useGame;
