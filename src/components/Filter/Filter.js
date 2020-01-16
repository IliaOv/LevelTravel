import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Filter.scss";
import rus from "../../static/rus.json";

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
    <div className={"filter"}>
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

      <button className={"square"} onClick={props.add}>
        <span className={"plus"}>+</span>
      </button>

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
          onChange={props.filter}
        />
      </div>
    </div>
  );
}

export { Filter };
