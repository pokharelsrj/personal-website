import React from "react";
import { Route, Switch } from "react-router-dom";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/blogs" component={Blogs} />
  </Switch>
);
