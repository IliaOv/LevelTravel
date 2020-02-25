import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import "./Filter.scss";

function valueLabelFormat(value) {
  return value > 0 ? `+${value}°C` : `${value}°C`;
}

const IOSSlider = withStyles({
  valueLabel: {
    top: "1.5rem",
    "& *": {
      background: "transparent",
      color: "#000"
    }
  }
})(Slider);

const Filter = ({ filterCity }) => {
  const onFilterChange = e => {
    let temp = 5;
    console.log(
      document
        .getElementsByClassName("PrivateValueLabel-label-160")[0]
        .innerHTML.slice(0, -2)
    );
    temp = document
      .getElementsByClassName("PrivateValueLabel-label-160")[0]
      .innerHTML.slice(0, -2);

    filterCity(parseInt(temp, 10));
  };
  const onFilterClick = e => {
    let temp = 5;
    e.target.getAttribute("aria-valuenow")
      ? (temp = e.target.getAttribute("aria-valuenow"))
      : (temp = e.target.children[2].getAttribute("value"));

    filterCity(parseInt(temp, 10));
  };

  return (
    <div className={"slider"}>
      <Typography id="track-inverted-slider" gutterBottom>
        Где сейчас теплее, чем
      </Typography>
      <IOSSlider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        defaultValue={5}
        step={5}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        min={-5}
        max={30}
        onChange={onFilterChange}
        onClick={onFilterClick}
      />
    </div>
  );
};

export { Filter };
