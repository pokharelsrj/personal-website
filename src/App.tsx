import Home from "./pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FEF6EB",
    },
    secondary: {
      main: "#C25B56",
    },
  },
});

export const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>
);

export default App;
