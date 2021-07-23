import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import { ReactComponent as Football } from "../../assets/hobbies/football.svg";
import { ReactComponent as Photography } from "../../assets/hobbies/photography.svg";
import { ReactComponent as Esports } from "../../assets/hobbies/esports.svg";

const useStyles = makeStyles((theme) => ({
  illustrations: {
    height: "200px",
    width: "400px",
  },
}));
export const Hobbies: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={8} justifyContent="center" alignItems="center">
          <Grid item lg={12}>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              I'm passionate about many things. Here are few things that
              interest me.
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid
                item
                component={Box}
                lg={6}
                display={{ xs: "none", lg: "block" }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  I&apos;ve been playing football from my childhood days. Aside
                  from playing the game myself, I&apos;m also a great admirer of
                  the sport.
                </Typography>
              </Grid>

              <Grid item lg={6}>
                <Football className={classes.illustrations} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item lg={6}>
                <Photography className={classes.illustrations} />
              </Grid>

              <Grid
                item
                component={Box}
                lg={6}
                display={{ xs: "none", lg: "block" }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  I discovered my interest in Photography and Film Making while
                  I was in grade 10. Since then, I&apos;ve always had a camera
                  by my side.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid
                item
                component={Box}
                lg={6}
                display={{ xs: "none", lg: "block" }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  A huge chunk of my time has been invested into e-sports since
                  the beginning of Covid-19. I&apos;ve been actively playing and
                  following the professional scene ever since.
                </Typography>
              </Grid>

              <Grid item lg={6}>
                <Esports className={classes.illustrations} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={12}
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="outlined" color="primary">
              My Hobbies
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Hobbies.displayName = "Hobbies";
