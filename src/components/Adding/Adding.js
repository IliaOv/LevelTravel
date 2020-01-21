import React from "react";
import rus from "../../static/rus.json";
import "./Adding.scss";

const Adding = ({ addCity }) => {
  const onPlusClick = () => {
    let id = "";
    rus.map((item, index) =>
      item["title"] ===
      document.getElementById("combo-box-demo").getAttribute("value")
        ? (id = index)
        : ""
    );

    if (
      document.getElementById("combo-box-demo").getAttribute("value") !== ""
    ) {
      addCity(id);
    }
  };

  return (
    <button className="square" onClick={onPlusClick}>
      <span className="plus">+</span>
    </button>
  );
};

export { Adding };
