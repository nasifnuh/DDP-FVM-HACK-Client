import React from "react";

import "./App.css";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import Board from "./components/pages/TaskBoard/Board";
import Home from "./components/pages/Home";

function App() {
  return <Home />;
}

export default App;
