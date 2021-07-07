import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import SocialHandles from "../SocialHandles";
import { Grid, Divider } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://srijan-pokharel-website.herokuapp.com/"
      >
        Srijan Pokharel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(10),
    padding: theme.spacing(6, 0),
  },
  socialHandle: {
    flex: 1,
    justifyContent: "center",
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Divider />
      <Container maxWidth="lg">
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <SocialHandles color="rgba(0, 0, 0, 0.54)" />
          </Grid>
          <Copyright />
        </Grid>
      </Container>
    </footer>
  );
};
