import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./Platform";

const usePlatform = (platformId: number | string) => {
  const apiClient = new APIClient<Platform>(`/platforms/${platformId}`);

  return useQuery({
    queryKey: ["platforms", platformId],
    queryFn: () => apiClient.get(),
  });
};

export default usePlatform;
