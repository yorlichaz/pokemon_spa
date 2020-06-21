import React from "react";
import Sticky from "../Sticky/Sticky";
import SearchBox from "../SearchBox/SearchBox";
import { connect } from "react-redux";
import setSearchBox from "../SearchBox/actions";

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchBox(event.target.value)),
  };
};

const Header = ({onSearchChange}) => {
  return (
    <Sticky>
      <h1>Pokedex</h1>
      <SearchBox onChange={onSearchChange} />
    </Sticky>
  );
};

export default connect(null,mapDispatchToProps)(Header);
