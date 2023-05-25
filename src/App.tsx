import GamesPage from "./pages/games";
import LayoutProvider from "./providers/layout";

function App() {
  return (
    <LayoutProvider>
      <GamesPage />
    </LayoutProvider>
  );
}

export default App;
