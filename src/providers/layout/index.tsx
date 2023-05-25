import { Grid, GridItem, Show } from "@chakra-ui/react";

const LayoutProvider: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const { children } = props;

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: `1fr`, lg: `250px 1fr` }}
    >
      <GridItem bg="yellow.300" area={"nav"}>
        Navbar
      </GridItem>
      <Show above='lg'>
        <GridItem bg="pink.300" area={"aside"}>
            Aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );


};

export default LayoutProvider;
