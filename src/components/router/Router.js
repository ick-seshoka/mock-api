import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "../../enums/routes";

import Home from "pages/home";
import InvalidURL from "pages/invalidURL";
import Details from "pages/details";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={InvalidURL} />
      <Route path={routes.employee} component={Details} />
      <Route component={InvalidURL} />
    </Switch>
  );
};

export default Router;
