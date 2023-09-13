import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" width="200px">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
