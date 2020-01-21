import React from "react";
import { connect } from "react-redux";
import { Card } from "./Card";
import { delCity } from "../../store/changing/actions";
import rus from "../../static/rus";
import cloud from "../../static/img/cloud.png";
import sun from "../../static/img/sun.png";
import rain from "../../static/img/rain.png";

const chooseIcon = item => {
  let icon = rain;
  if (rus[item]["icon"] === "cloud") {
    icon = cloud;
  }
  if (rus[item]["icon"] === "sun") {
    icon = sun;
  }
  return icon;
};

const CardContainer = ({ delCity, cards, slider }) => {
  return cards.map((item, index) =>
    rus[item]["temp"] > slider ? (
      <Card
        key={Math.random()}
        city={rus[item]["title"]}
        img={chooseIcon(item)}
        temp={rus[item]["temp"]}
        wind={rus[item]["wind"]}
        pressure={rus[item]["pressure"]}
        delCity={delCity}
      />
    ) : (
      ""
    )
  );
};

const mapStateToProps = state => {
  return {
    cards: state.change.cards,
    slider: state.change.slider
  };
};

const mapDispatchToProps = {
  delCity
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
