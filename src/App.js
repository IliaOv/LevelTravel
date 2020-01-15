import React from "react";
import { Filter } from "./components/Filter/Filter.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <header>
        <Filter />
      </header>
    );
  }
}

export { App };
