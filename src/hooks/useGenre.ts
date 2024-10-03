import { Genre } from "@/entities/Genre";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useGenre = (genreId: number | string) => {
  const apiClient = new APIClient<Genre>("/genres/" + genreId);

  return useQuery({
    queryKey: ["genres", genreId],
    queryFn: () => apiClient.get(),
  });
};

export default useGenre;
