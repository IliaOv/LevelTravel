import React from "react";
import { Filter } from "./components/Filter/Filter.js";
import { Card } from "./components/Card/Card.js";
import russia from "../src/static/russia.json";
import sun from "../src/static/img/sun.png";
import cloud from "../src/static/img/cloud.png";
import rain from "../src/static/img/rain.png";
import "./App.css";

class App extends React.Component {
  state = {
    cards: [1, 2, 3]
  };

  addCard = () => {
    let id = "";
    russia.map((item, index) =>
      item["title"] ===
      document.getElementById("combo-box-demo").getAttribute("value")
        ? (id = index)
        : ""
    );

    this.setState({
      cards: [...this.state.cards, id]
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Filter add={() => this.addCard()} />
        </header>
        <main>
          {this.state.cards.map((item, index) => (
            <Card
              key={Math.random()}
              city={russia[item]["title"]}
              img={
                russia[item]["icon"] === "cloud"
                  ? cloud
                  : russia[item]["icon"] === "sun"
                  ? sun
                  : rain
              }
              temp={russia[item]["temp"]}
              wind={russia[item]["wind"]}
              pressure={russia[item]["pressure"]}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export { App };
