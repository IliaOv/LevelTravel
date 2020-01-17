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
    cards: [0, 172, 1887],
    slider: 5
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
      cards:
        this.state.cards.indexOf(id) === -1
          ? [...this.state.cards, id]
          : [...this.state.cards]
    });
  };

  closeCard = i => {
    let arr = this.state.cards;
    arr.splice(i, 1);
    this.setState({
      cards: arr
    });
  };

  filterCard = () => {
    this.setState({
      slider: parseInt(
        document
          .getElementsByClassName("PrivateValueLabel-label-161")[0]
          .innerHTML.replace("°C", ""),
        10
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Filter add={() => this.addCard()} filter={() => this.filterCard()} />
        </header>
        <main>
          {this.state.cards.map((item, index) =>
            rus[item]["temp"] >= this.state.slider ? (
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
            ) : (
              ""
            )
          )}
        </main>
      </React.Fragment>
    );
  }
}

export { App };
