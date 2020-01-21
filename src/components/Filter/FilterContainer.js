import React from "react";
import { connect } from "react-redux";
import { Filter } from "./Filter";
import { filterCity } from "../../store/changing/actions";

const FilterContainer = ({ filterCity }) => {
  return <Filter filterCity={filterCity} />;
};

const mapStateToProps = state => {
  return {
    cards: state.change.cards,
    slider: state.change.slider
  };
};

const mapDispatchToProps = {
  filterCity
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
