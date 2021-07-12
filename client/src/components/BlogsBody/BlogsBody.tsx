import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(7),
  },
}));
export const BlogsBody: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.mainDiv}>
        <Grid container>
          <Grid item>
            <Typography>What's New?</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

BlogsBody.displayName = "BlogsBody";
