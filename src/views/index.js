import React from "react";
import { Route } from "react-router-dom";
import { Login, List, Branches, Layout, CarList } from "./main/components";
import Home from "./main"

export default (props) => {
  return (
    <>
      <Layout>
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "login"}
          component={Login}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "list"}
          component={List}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "branches"}
          component={Branches}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "carlist"}
          component={CarList}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path}
          component={Home}
        />
      </Layout>
    </>
  );
};
