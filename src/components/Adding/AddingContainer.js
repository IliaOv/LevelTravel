import React from "react";
import { connect } from "react-redux";
import { Adding } from "./Adding";
import { addCity } from "../../store/changing/actions";

const AddingContainer = ({ addCity, double }) => {
  return <Adding addCity={addCity} double={double} />;
};

const mapStateToProps = state => {
  return {
    cards: state.change.cards,
    double: state.change.double
  };
};

const mapDispatchToProps = {
  addCity
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingContainer);
