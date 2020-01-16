import React from "react";
import "./Card.scss";

class Card extends React.Component {
  render() {
    return (
        <div className={'card'}>
          <h2 className={'card__header'}>Moscow</h2>
          <div className={'card_shortinf'}>
            <p>img</p>
            <p className={'card_temp'}>+7 °C</p>
          </div>
          <div className={'card__longinf'}>
            <p className={'card_wind'}>Ветер:</p>
            <p className={'card_pressure'}>Давление:</p>
          </div>
        </div>
    );
  }
}

export { Card };
