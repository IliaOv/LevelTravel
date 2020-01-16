import React from "react";
import { Filter } from "./components/Filter/Filter.js";
import { Card } from "./components/Card/Card.js";
import rus from "../src/static/rus.json";
import sun from "../src/static/img/sun.png";
import cloud from "../src/static/img/cloud.png";
import rain from "../src/static/img/rain.png";
import "./App.css";

class App extends React.Component {
  state = {
    cards: [0, 1, 2]
  };

  addCard = () => {
    let id = "";
    rus.map((item, index) =>
      item["title"] ===
      document.getElementById("combo-box-demo").getAttribute("value")
        ? (id = index)
        : ""
    );

    this.setState({
      cards: [...this.state.cards, id]
    });
  };

  closeCard = i => {
    let arr = this.state.cards;
    arr.splice(i, 1);
    this.setState({
      cards: arr
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
              city={rus[item]["title"]}
              img={
                rus[item]["icon"] === "cloud"
                  ? cloud
                  : rus[item]["icon"] === "sun"
                  ? sun
                  : rain
              }
              temp={rus[item]["temp"]}
              wind={rus[item]["wind"]}
              pressure={rus[item]["pressure"]}
              close={() => this.closeCard(index)}
            />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export { App };
