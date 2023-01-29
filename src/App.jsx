import React from "react";

import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import TaskBoard from "./components/pages/TaskBoard/";

function App() {
  return <Profile />;
}

export default App;
