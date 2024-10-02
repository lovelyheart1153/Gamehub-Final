import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/parents/lists");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
  });

export default usePlatforms;
