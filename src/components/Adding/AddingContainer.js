import React from "react";
import { connect } from "react-redux";
import { Adding } from "./Adding";
import { addCity } from "../../store/changing/actions";

const AddingContainer = ({ addCity }) => {
  return <Adding addCity={addCity} />;
};

const mapStateToProps = state => {
  return {
    cards: state.change.cards
  };
};

const mapDispatchToProps = {
  addCity
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingContainer);
