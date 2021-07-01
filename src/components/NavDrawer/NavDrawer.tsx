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

const useStyles = makeStyles((theme) => ({}));

export const NavDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemText>About me</ListItemText>
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
