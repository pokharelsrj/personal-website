import React from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import { CssBaseline } from "@material-ui/core";

export const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Introduction />
    </>
  );
};

Home.displayName = "Home";
