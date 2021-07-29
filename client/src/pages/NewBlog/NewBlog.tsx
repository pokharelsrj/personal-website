import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MDEditor from "@uiw/react-md-editor";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(7),
  },
}));
const submitNewPost = () => {
  console.log("Submitted");
};
export const NewBlog: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("**Hello world!!!**");
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
      </Container>
    </>
  );
};

NewBlog.displayName = "NewBlog";
