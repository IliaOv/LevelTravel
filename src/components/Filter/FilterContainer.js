import React from "react";
import { connect } from "react-redux";
import { Filter } from "./Filter";
import { filterCity } from "../../store/changing/actions";

class FilterContainer extends React.Component {
  render() {
    return <Filter filterCity={this.props.filterCity} />;
  }
}

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
