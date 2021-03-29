import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/home";
import Details from "pages/details";
import { routes } from "../../enums/routes";

const Router = () => {
  return (
    <Switch>
      <Route path={routes.home} component={Details} />
      <Route path={routes.employee} component={Details} />
    </Switch>
  );
};

export default Router;
