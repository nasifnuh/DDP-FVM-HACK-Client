import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import Profile from "./components/pages/Profile";
import TaskBoard from "./components/pages/TaskBoard";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        {/* Remove below 3 routes and use the commented <Switch></Switch> when been made dynamic */}
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/board" component={TaskBoard} />
        {/* <Switch>
          <AuthenticatedRoute
            exact
            path="/"
            component={TaskBoard}
            roles={[USER_DEVELOPER, USER_REVIEWER, USER_TESTER]}
          />
          <AuthenticatedRoute
            exact
            path="/explore"
            component={Explore}
            roles={[USER_DEVELOPER, USER_REVIEWER, USER_TESTER]}
          />
          <AuthenticatedRoute
            exact
            path="/profile"
            component={Profile}
            roles={[USER_DEVELOPER, USER_REVIEWER, USER_TESTER]}
          />
          <AuthenticatedRoute
            exact
            path="*"
            component={PageNotFound}
            roles={[USER_DEVELOPER, USER_REVIEWER, USER_TESTER]}
          />
        </Switch> */}
      </Router>
    </div>
  );
};
export default App;
