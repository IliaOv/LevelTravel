import Search from "react-search";
import React, { Component } from "react";
import "./Filter.css";
import russia from "../../static/russia1.json";

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <Search
          items={russia}
          placeholder="Выберите город"
          maxSelected={1}
          multiple={false}
        />
      </React.Fragment>
    );
  }
}

export { Filter };
