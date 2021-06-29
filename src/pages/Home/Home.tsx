import React from "react";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Introduction />
    </>
  );
};

Home.displayName = "Home";
