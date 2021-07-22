import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button, Box } from "@material-ui/core";
import SkillsDescription from "../SkillsDescription";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import ts from "../../assets/skills/ts.png";
import kotlin from "../../assets/skills/kotlin.png";
import node from "../../assets/skills/node.png";
import micronaut from "../../assets/skills/micronaut.png";
import postgres from "../../assets/skills/postgres.png";

import { SkillsInterface } from "../SkillsDescription/types";

const skillsData: Array<SkillsInterface> = [
  {
    title: "Html",
    description:
      "HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
  {
    title: "JS",
    description:
      "JS is a programming language that conforms to the ECMAScript specification.",
  },
  {
    title: "TS",
    description:
      "TS is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
  },
  {
    title: "Kotlin",
    description:
      "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.",
  },
  {
    title: "Nodejs",
    description:
      "Node.js is a back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  },
  {
    title: "Micronaut",
    description:
      "Micronaut is a modern, JVM-based, Full-Stack framework or building modular easily testable microservice and serverless application.",
  },
  {
    title: "PostgreSQl",
    description:
      "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
  },
];

const useStyles = makeStyles((theme) => ({
  images: {
    marginRight: theme.spacing(3),
    minWidth: "10%",
    maxWidth: "15%",
  },
  skillsDescription: {
    // backgroundColor: "#fff",
    // minHeight: "200px",
  },
}));
export const Skills: React.FC = () => {
  const classes = useStyles();
  const [skillsState, setSkillsState] = useState(0);
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={8}>
          <Grid
            container
            item
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={12}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Driven by my eagerness, I&apos;ve been honing my technical
                skills for a long time.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="center" alignItems="center">
            <Grid item lg={7}>
              <Grid container spacing={5} direction="column">
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={html}
                    alt="html"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(0);
                    }}
                  />
                  <img
                    src={css}
                    alt="css"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(1);
                    }}
                  />
                  <img
                    src={js}
                    alt="js"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(2);
                    }}
                  />
                  <img
                    src={ts}
                    alt="ts"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(3);
                    }}
                  />
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={kotlin}
                    alt="kotlin"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(4);
                    }}
                  />
                  <img
                    src={node}
                    alt="node"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(5);
                    }}
                  />
                  <img
                    src={micronaut}
                    alt="micronaut"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(6);
                    }}
                  />
                  <img
                    src={postgres}
                    alt="postgres"
                    className={classes.images}
                    onClick={() => {
                      setSkillsState(7);
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5}>
              <Box display={{ xs: "none", lg: "inline" }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  className={classes.skillsDescription}
                >
                  <Grid item lg={12}>
                    <SkillsDescription
                      title={skillsData[skillsState].title}
                      description={skillsData[skillsState].description}
                    />
                  </Grid>
                </Grid>
              </Box>
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
              My Technical Skills
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Skills.displayName = "Skills";
