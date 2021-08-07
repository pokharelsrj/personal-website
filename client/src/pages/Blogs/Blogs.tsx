import React from "react";
import Header from "../../components/Header";
import { CssBaseline } from "@material-ui/core";
import BlogsBody from "../../components/BlogsBody";

export const Blogs: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <BlogsBody />
    </>
  );
};

Blogs.displayName = "Blogs";
