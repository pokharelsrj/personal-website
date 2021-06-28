import React from "react";
import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";

export const Header: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.displayName = "Header";
