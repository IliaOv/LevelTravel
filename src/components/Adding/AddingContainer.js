import React from "react";
import { connect } from "react-redux";
import { Adding } from "./Adding";
import { addCity } from "../../store/changing/actions";

class AddingContainer extends React.Component {
  render() {
    return <Adding addCity={this.props.addCity} />;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.change.cards
  };
};

const mapDispatchToProps = {
  addCity
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingContainer);
