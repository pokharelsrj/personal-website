import React, { useState } from "react";
import {
  Drawer,
  ListItemText,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import CreateIcon from "@material-ui/icons/Create";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 250,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
  },
  drawer: {
    paddingTop: "50px",
  },
}));

export const NavDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawer}>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <List>
            <ListItem
              button
              onClick={() => {
                history.push("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push("/");
              }}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Technologies" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push("/");
              }}
            >
              <ListItemIcon>
                <SportsSoccerIcon />
              </ListItemIcon>
              <ListItemText primary="Hobbies" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push("/blogs");
              }}
            >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <Menu />
      </IconButton>
    </React.Fragment>
  );
};

NavDrawer.displayName = "NavDrawer";
