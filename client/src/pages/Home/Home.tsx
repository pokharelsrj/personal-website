import React from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Footer from "../../components/Footer";
import { CssBaseline } from "@material-ui/core";
import Skills from "../../components/Skills";

export const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Introduction />
      <Skills />
      <Footer />
    </>
  );
};

Home.displayName = "Home";
