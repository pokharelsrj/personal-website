import React from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../../assets/img1.jpeg";

const useStyles = makeStyles((theme) => ({
  intro: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(7),
  },
  aboutMe: {},
  aboutMeDiv: {},
  img1: {
    borderRadius: "10px",
  },
}));
export const Introduction: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" className={classes.intro}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Hi, I&apos;m Srijan
        </Typography>
      </Container>
      <div className={classes.aboutMeDiv}>
        <Container maxWidth="md" className={classes.aboutMe}>
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item lg={7}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={8}
                direction="column"
              >
                <Grid item lg={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                  >
                    I am fascinated by Science and love Sports. I also have a
                    unique affinity for Film making and Photography.
                  </Typography>
                </Grid>
                <Grid item lg={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    I'm pursuing Computer Science Engineering from Chitkara
                    University in India.
                  </Typography>
                </Grid>
                <Grid item lg={12}>
                  <Button variant="outlined" color="primary">
                    Learn More About Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5}>
              <img
                src={img1}
                alt="img1"
                width="100%"
                height="auto"
                className={classes.img1}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

Introduction.displayName = "Introduction";
