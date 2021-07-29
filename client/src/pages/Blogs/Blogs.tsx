import React from "react";
import Header from "../../components/Header";
import { CssBaseline } from "@material-ui/core";
import BlogsBody from "../../components/BlogsBody";
import { GoogleLogin } from "react-google-login";

export const Blogs: React.FC = () => {
  const responseGoogle = (response) => {
    fetch("http://localhost:5000/api/login/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: response.tokenId }),
    }).then((res) => console.log(res.json()));
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <BlogsBody />
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
