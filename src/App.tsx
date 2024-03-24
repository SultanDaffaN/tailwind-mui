import { Button } from "@mui/material";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <StyledEngineProvider injectFirst>
        <Button variant="contained" className="bg-green-600">
          Contained
        </Button>
        <p className="font-bold">
          Click on the Vite and React logos to learn more
        </p>
      </StyledEngineProvider>
    </>
  );
}

export default App;
