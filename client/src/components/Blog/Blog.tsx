import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "../Markdown";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

export const Blog: React.FC = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../assets/blogs/${id}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid item>
          <Markdown>{content}</Markdown>
        </Grid>
      </Container>
    </>
  );
};

Blog.displayName = "Blog";
