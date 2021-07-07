import React, { useState } from "react";
import {
  Drawer,
  ListItemText,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingRight: theme.spacing(10, 5),
  },
  drawerPaper: {
    width: 200,
    opacity: 0.95,
  },
}));

export const NavDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const classes = useStyles();
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
        <List className={classes.list}>
          <ListItem>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Technologies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Hobbies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Blog</ListItemText>
          </ListItem>
        </List>
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
