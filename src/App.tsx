import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem gridArea="nav" bg="tomato">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="green">
            aside
          </GridItem>
        </Show>
        <GridItem gridArea="main" bg="orange">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
