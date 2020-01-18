import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Filter.scss";

function valueLabelFormat(value) {
  return value > 0 ? `+${value}°C` : `${value}°C`;
}

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onFilterClick() {
    let temp = parseInt(
      document
        .getElementsByClassName("PrivateValueLabel-label-159")[0]
        .innerHTML.replace("°C", ""),
      10
    );
    this.props.filterCity(temp);
  }

  render() {
    return (
      <div className={"slider"}>
        <Typography id="track-inverted-slider" gutterBottom>
          Где сейчас теплее, чем
        </Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-slider"
          defaultValue={5}
          step={5}
          valueLabelDisplay="on"
          valueLabelFormat={valueLabelFormat}
          min={-5}
          max={30}
          onClick={this.onFilterClick}
        />
      </div>
    );
  }
}

export { Filter };
