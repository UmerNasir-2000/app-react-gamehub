import { Button } from "@chakra-ui/react";
import LayoutProvider from "./providers/layout";

function App() {
  return (
    <LayoutProvider>
      <Button>Click Me!!!</Button>
    </LayoutProvider>
  );
}

export default App;
