import Search from "react-search";
import React, { Component } from "react";
import "./Filter.css";
import russia from "../../static/russia1.json";

class Filter extends Component {
  render() {
    return (
      <div className={"filter"}>
        <Search
          items={russia}
          placeholder="Выберите город"
          maxSelected={1}
          multiple={false}
        />

        <div className={"square"}>
          <span className={"plus"}>+</span>
        </div>

        <div className="slider">
          <p>Где сейчас теплее, чем</p>
          <input type="range" min="-10" max="20" step="1" />
        </div>
      </div>
    );
  }
}

export { Filter };
