import React from "react";
import "./Card.scss";

class Card extends React.Component {
  render() {
    const { city, img, temp, wind, pressure } = this.props;
    return (
      <div className={"card"}>
        <h2 className={"card__header"}>{city}</h2>
        <div className={"card_shortinf"}>
          <img
            className={"card__img"}
            src={img}
            width={52}
            height={52}
            alt={"Иконка погоды"}
          />
          <p className={"card_temp"}>{temp} °C</p>
        </div>
        <div className={"card__longinf"}>
          <p className={"card_wind"}>Ветер: {wind}</p>
          <p className={"card_pressure"}>Давление: {pressure}</p>
        </div>
      </div>
    );
  }
}

export { Card };
