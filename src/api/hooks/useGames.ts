import { useQuery } from "@tanstack/react-query";
import NetworkingManager from "..";
import Route from "../../constants/enums/routes";

const useGames = () => {
    
  const { data, isLoading, error } = useQuery({
    queryKey: ["games"],
    queryFn: () => NetworkingManager.getAll(Route.GAME),
    staleTime: 86400, // 24h
  });

  return { games: data, isLoading, error };
  
};

export default useGames;
