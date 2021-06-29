import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";

export const Introduction: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom>
          Hello
        </Typography>
        <Typography variant="h1" align="center" gutterBottom>
          I&apos;m Srijan
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          gutterBottom
          paragraph
        >
          I am pursuing my Bachelor's Degree in Computer Science from Chitkara
          University. Apart from my love for Computers, I'm fascinated by
          Physics and Scientific Explorations. Sports are an inseparable part of
          my life. I have a unique affinity for Film Making and Photography.
        </Typography>
        <Typography variant="h4" align="center" color="textSecondary">
          You&apos;ll dive deep into my life through this website
        </Typography>
      </Container>
    </>
  );
};

Introduction.displayName = "Introduction";
