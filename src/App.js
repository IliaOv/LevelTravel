import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddingContainer from "./components/Adding/AddingContainer";
import { Filter } from "./components/Filter/Filter.js";
import { Card } from "./components/Card/Card.js";
import CardContainer from "./components/Card/CardContainer.js";

import rus from "../src/static/rus.json";
import sun from "../src/static/img/sun.png";
import cloud from "../src/static/img/cloud.png";
import rain from "../src/static/img/rain.png";

import "./App.css";

const store = createStore(rootReducers);

class App extends React.Component {
  state = {
    cards: [0, 172, 1887],
    slider: 5
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
      <Provider store={store}>
        <header>
          <Autocomplete
            id="combo-box-demo"
            options={rus}
            getOptionLabel={option => option.title}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                label="Выберите город"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <AddingContainer />
          <Filter filter={() => this.filterCard()} />
        </header>
        <main>
          <CardContainer />
          {/*store
            .getState()
            .adding.cards.map((item, index) =>
              rus[item]["temp"] >= store.getState().adding.slider ? (
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
            )*/}
        </main>
      </Provider>
    );
  }
}

export { App };
