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

const CardContainer = ({ delCity, cards, slider, empty }) => {
  if (empty) {
    return cards.map((item, index) =>
      rus[item]["temp"] > slider && empty ? (
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
  } else {
    return <div>Нет таких городов</div>;
  }
};

const mapStateToProps = state => {
  return {
    cards: state.change.cards,
    slider: state.change.slider,
    empty: state.change.empty
  };
};

const mapDispatchToProps = {
  delCity
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
