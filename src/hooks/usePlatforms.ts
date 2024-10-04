import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });

export default usePlatforms;
