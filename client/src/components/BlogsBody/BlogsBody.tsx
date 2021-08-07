import React from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlogCard from "../BlogCard";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(7),
  },
  illustrations: {
    height: "900px",
  },
}));
export const BlogsBody: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.mainDiv}>
        <Grid container spacing={8} justifyContent="center" alignItems="center">
          <Grid item>
            <BlogCard fileName="blog1.md" date={new Date()} />
          </Grid>
          <Grid item>
            <BlogCard fileName="blog2.md" date={new Date()} />
          </Grid>
          <Grid item>
            <BlogCard fileName="blog3.md" date={new Date()} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

BlogsBody.displayName = "BlogsBody";
