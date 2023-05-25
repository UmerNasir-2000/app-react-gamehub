import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import NetworkingManager from "..";
import Route from "../../constants/enums/routes";
import Game from "../models/games";
import BaseHttpResponse from "../models/shared/baseHttpResponse";

const useGames = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: () => NetworkingManager.getAll<BaseHttpResponse<Game>>(Route.GAME),
    staleTime: ms("24h"),
  });

  if (response?.data) {
    const games = response?.data.results.map((game) => new Game(game));

    const gamesResponse = new BaseHttpResponse<Game>({
      count: response?.data.count,
      next: response?.data.next,
      previous: response?.data.previous,
      results: games,
    });

    return { games: gamesResponse, isLoading, error };
    
  } else return { games: null, isLoading, error };
};

export default useGames;
