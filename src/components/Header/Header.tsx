import React from "react";
import { AppBar, Toolbar, CssBaseline, Link, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialHandles from "../SocialHandles";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: `${theme.palette.background.paper}`,
    borderBottom: `1px solid ${theme.palette.background.paper}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbar: {
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  socialHandles: {},
  logo: {},
  nav: {},
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" className={classes.socialHandles}>
            <SocialHandles />
          </Box>

          <Box display="flex" className={classes.logo}>
            <img src={logo} alt="logo" height="60px" />
          </Box>

          <Box display="flex" className={classes.nav}>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.displayName = "Header";
