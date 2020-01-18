import React from "react";
import rus from "../../static/rus.json";
import "./Adding.scss";

class Adding extends React.Component {
  constructor(props) {
    super(props);

    this.onPlusClick = this.onPlusClick.bind(this);
  }

  onPlusClick() {
    let id = "";
    rus.map((item, index) =>
      item["title"] ===
      document.getElementById("combo-box-demo").getAttribute("value")
        ? (id = index)
        : ""
    );
    this.props.addCity(id);
  }

  render() {
    return (
      <button className={"square"} onClick={this.onPlusClick}>
        <span className={"plus"}>+</span>
      </button>
    );
  }
}

export { Adding };
