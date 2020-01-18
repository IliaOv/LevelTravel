import React from "react";
import "./Card.scss";
import rus from "../../static/rus";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onCloseClick(e) {
    let id = 0;
    rus.map((item, index) =>
      item["title"] === e.target.previousSibling.innerHTML ? (id = index) : ""
    );
    console.log(id);
    this.props.delCity(id);
  }

  render() {
    const { city, img, temp, wind, pressure } = this.props;
    return (
      <div className={"card"}>
        <div className={"card__title"}>
          <h2 className={"card__header"}>{city}</h2>
          <span className={"card__close"} onClick={this.onCloseClick}></span>
        </div>
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
