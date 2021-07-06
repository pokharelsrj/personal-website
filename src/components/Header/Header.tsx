import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialHandles from "../SocialHandles";
import logo from "../../assets/logo.png";
import NavDrawer from "../NavDrawer";
import { Link as NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: `${theme.palette.background.default}`,
    marginTop: theme.spacing(4),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbar: {
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  socialHandles: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
  },
  nav: {
    flex: 1,
    justifyContent: "flex-end",
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box
            display={{ xs: "none", md: "flex" }}
            className={classes.socialHandles}
          >
            <SocialHandles color="black" />
          </Box>
          <Box display="flex" className={classes.logo}>
            <img src={logo} alt="logo" height="60px" />
          </Box>
          {isMatch ? (
            <NavDrawer />
          ) : (
            <>
              <Box display="flex" className={classes.nav}>
                <NavLink to={{ pathname: "/blogs" }}>
                  <Button className={classes.link}>About</Button>
                </NavLink>

                <NavLink to={{ pathname: "/blogs" }}>
                  <Button className={classes.link}>Technologies</Button>
                </NavLink>

                <NavLink to={{ pathname: "/blogs" }}>
                  <Button className={classes.link}>Hobbies</Button>
                </NavLink>
                <NavLink to={{ pathname: "/blogs" }}>
                  <Button className={classes.link}>Blogs</Button>
                </NavLink>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.displayName = "Header";
