import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useUserData } from "../../utils";

const Index = ({ component: Component, roles, ...otherProps }) => {
  const { userData } = useUserData();

  const userRoles = roles ? roles : [];
  const userHasRequiredRole =
    userData && userRoles.includes(userData.role) ? true : false; //Can be removed if unnecessary; "DEVELOPER" || "REVIEWER" || "TESTER" || "TASK OWNER"
  const isAuthenticated = userData !== null ? true : false;
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuthenticated ? (
          userHasRequiredRole ? (
            <Component {...props} />
          ) : (
            <Redirect to="/pageNotFound" />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default Index;
