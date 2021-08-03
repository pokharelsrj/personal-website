import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { CssBaseline } from "@material-ui/core";
import BlogsBody from "../../components/BlogsBody";
import { GoogleLogin } from "react-google-login";
import Blog from "../../components/Blog";
import { BlogInterface } from "../../components/Blog/types";

export const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blog", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const responseGoogle = (response) => {
    fetch("http://localhost:5000/api/login/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: response.tokenId }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
      });
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <BlogsBody />
      {blogs.length !== 0 ? (
        <>
          <Blog content={blogs[1].content} date={blogs[1].date} />
        </>
      ) : (
        <></>
      )}

      <GoogleLogin
        clientId="119868810317-t4gu0iqskcrupnqkanu1g532d52f689i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

Blogs.displayName = "Blogs";
