import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes.js";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

export function Admin({ ...rest }) {
  return (
    <div>
      <div>{switchRoutes}</div>
    </div>
  );
}
