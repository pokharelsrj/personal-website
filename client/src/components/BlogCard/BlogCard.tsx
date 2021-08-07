import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BlogInterface } from "./types";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { Blog } from "../Blog/Blog";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const BlogCard: React.FC<BlogInterface> = ({ fileName, date }) => {
  const history = useHistory();
  const [content, setContent] = useState("");
  const { path, url } = useRouteMatch();

  useEffect(() => {
    import(`../../assets/blogs/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fileName]);

  const classes = useStyles();

  const openFullBlog = () => {
    history.push(`${url}/ab`);
  };
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardHeader title="Blog Title" subheader="September 14, 2016" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={openFullBlog}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Switch>
        <Route exact path={`${path}/ab`} component={Blog} />
      </Switch>
    </>
  );
};

BlogCard.displayName = "BlogCard";
