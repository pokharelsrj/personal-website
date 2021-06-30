import Home from "./pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,
});

export const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>
);

export default App;
