import Home from "./pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,
});

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    overflowX: "hidden",
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.mainDiv}>
        <Home />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
