import React from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Footer from "../../components/Footer";
import { CssBaseline } from "@material-ui/core";
import Skills from "../../components/Skills";
import Hobbies from "../../components/Hobbies";

export const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Introduction />
      <Skills />
      <Hobbies />
      <Footer />
    </>
  );
};

Home.displayName = "Home";
