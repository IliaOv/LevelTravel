import React from "react";
import "./Filter.css";

class Filter extends React.Component {
  render() {
    return <div className="parameters">
        <input id="city" type="text" className="autocomplete" placeholder="Начните вводить код или название" />
    </div>;
  }
}

export { Filter };
