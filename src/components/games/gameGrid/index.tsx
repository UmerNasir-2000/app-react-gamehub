import {
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import useGames from "../../../api/hooks/useGames";
import GameCard from "../gameCard";

const GameGrid = () => {
  const { games, isLoading, error } = useGames();

  if (isLoading) {
    <Spinner />;
  }

  if (error) return null;

  return (
    <SimpleGrid columns={4} gap="4">
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
