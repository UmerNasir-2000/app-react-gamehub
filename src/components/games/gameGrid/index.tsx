import {
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import useGames from "../../../api/hooks/useGames";
import GameCard from "../gameCard";

const GameGrid = () => {
  const { games, isLoading, error } = useGames();

  console.log('isLoading', isLoading)

  if (isLoading) {
    return <Spinner />;
  }

  if (error) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl: 4 }} columnGap={4}>
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
