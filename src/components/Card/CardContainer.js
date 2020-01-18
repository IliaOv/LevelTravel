import React from "react";
import { connect } from "react-redux";
import { Card } from "./Card";
import { delCity } from "../../store/changing/actions";
import rus from "../../static/rus";
import cloud from "../../static/img/cloud.png";
import sun from "../../static/img/sun.png";
import rain from "../../static/img/rain.png";

class CardContainer extends React.Component {
  render() {
    return this.props.cards.map((item, index) =>
      rus[item]["temp"] > this.props.slider ? (
        <Card
          key={Math.random()}
          city={rus[item]["title"]}
          img={
            rus[item]["icon"] === "cloud"
              ? cloud
              : rus[item]["icon"] === "sun"
              ? sun
              : rain
          }
          temp={rus[item]["temp"]}
          wind={rus[item]["wind"]}
          pressure={rus[item]["pressure"]}
          delCity={this.props.delCity}
        />
      ) : (
        ""
      )
    );
  }
}

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
