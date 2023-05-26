import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Game from "../../../api/models/games";

type GameCardProps = {
  game: Game;
};

const GameCard = (props: GameCardProps) => {
  const { game } = props;
  return (
    <Card borderRadius="lg" overflow="hidden" h="fit-content">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
