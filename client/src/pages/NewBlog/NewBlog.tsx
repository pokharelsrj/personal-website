import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MDEditor from "@uiw/react-md-editor";
import Markdown from "../../components/Markdown";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(7),
  },
}));

export const NewBlog: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("**Hello world!!!**");
  const submitNewPost = () => {
    fetch("http://localhost:5000/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: value }),
    })
      .then((res) => res.json())
      .then((blog) => {
        console.log(blog);
      });
  };
  return (
    <>
      <Container maxWidth="lg" className={classes.mainDiv}>
        <MDEditor
          height={200}
          value={value}
          onChange={(val) => setValue(val || "")}
          preview="edit"
          toolbarHeight={50}
        />
        <Button variant="outlined" color="primary" onClick={submitNewPost}>
          Submit
        </Button>
        <Markdown>{value}</Markdown>
      </Container>
    </>
  );
};

NewBlog.displayName = "NewBlog";
