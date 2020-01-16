import React from "react";
import { Filter } from "./components/Filter/Filter.js";
import { Card } from "./components/Card/Card.js";
import russia from "../src/static/russia.json";
import sun from "../src/static/img/sun.png";
import cloud from "../src/static/img/cloud.png";
import rain from "../src/static/img/rain.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Filter />
        </header>
        <main>
          {russia.map((item, index) => (
            <Card
              key={Math.random()}
              city={item["title"]}
              img={
                item["icon"] === "cloud"
                  ? cloud
                  : item["icon"] === "sun"
                  ? sun
                  : rain
              }
              temp={item["temp"]}
              wind={item["wind"]}
              pressure={item["pressure"]}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export { App };
