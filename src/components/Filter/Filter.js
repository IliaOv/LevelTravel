import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Filter.scss";

const useStyles = makeStyles(theme => ({
  root: {
    width: "15rem",
    margin: "0 6.5rem"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function valueLabelFormat(value) {
  return value > 0 ? `+${value}°C` : `${value}°C`;
}

function Filter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
        onClick={props.filter}
      />
    </div>
  );
}

export { Filter };
