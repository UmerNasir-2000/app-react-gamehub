import useGames from "../../../api/hooks/useGames";

const GameGrid = () => {

  const { games, isLoading, error  } = useGames();

  if (isLoading) { 
    <div>Loading...</div>
  }

  console.log('games :>> ', games);

  return <div>GameGrid</div>;
};

export default GameGrid;
