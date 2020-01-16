import React from "react";
import { Filter } from "./components/Filter/Filter.js";
import { Card } from "./components/Card/Card.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Filter />
        </header>
        <main>
          <Card />
        </main>
      </React.Fragment>
    );
  }
}

export { App };
