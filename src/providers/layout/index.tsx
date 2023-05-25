import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../../components/core/navbar";

const LayoutProvider: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const { children } = props;

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: `1fr`, lg: `250px 1fr` }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
            Aside
        </GridItem>
      </Show>
      <GridItem area='main'>
        {children}
      </GridItem>
    </Grid>
  );


};

export default LayoutProvider;
