import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../../components/core/navbar";

const LayoutProvider: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const { children } = props;

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: `1fr`, lg: `250px 1fr` }}
      paddingY={3}
      paddingX={4}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' border='1px solid tomato'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' border='1px solid tomato'>
        {children}
      </GridItem>
    </Grid>
  );


};

export default LayoutProvider;
