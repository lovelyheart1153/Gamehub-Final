import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../hooks/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
  });

export default usePlatforms;
