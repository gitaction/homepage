import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../_component"
import routes from "../routes.js";

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
    <div className="logged-in env-production page-responsive page-profile mine">
      <NavBar/>
      <div>{switchRoutes}</div>
    </div>
  );
}
