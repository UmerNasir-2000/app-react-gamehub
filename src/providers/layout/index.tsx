import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../../components/core/navbar";

const LayoutProvider: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const { children } = props;

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: `1fr`, lg: `200px 1fr` }}
      paddingY={3}
      paddingX={4}
    >
      <GridItem area='nav' mb={4}>
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
