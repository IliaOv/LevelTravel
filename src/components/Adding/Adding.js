import React from "react";
import "./Adding.scss";

function Adding(props) {
  return (
      <button className={"square"} onClick={props.add}>
        <span className={"plus"}>+</span>
      </button>
  );
}

export { Adding };
