import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddingContainer from "./components/Adding/AddingContainer";
import FilterContainer from "./components/Filter/FilterContainer.js";
import CardContainer from "./components/Card/CardContainer.js";
import rus from "../src/static/rus.json";
import "./App.css";

const store = createStore(rootReducers);

class App extends React.Component {
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
          <FilterContainer />
        </header>
        <main>
          <CardContainer />
        </main>
      </Provider>
    );
  }
}

export { App };
