import React from "react";

import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import TaskBoard from "./components/pages/TaskBoard/";
import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";

function App() {
  return <TaskBoard />;
}

export default App;
