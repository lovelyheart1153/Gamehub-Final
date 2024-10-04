import { ScreenShot } from "@/entities/ScreenShots";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenShots;
