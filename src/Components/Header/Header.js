import React, { useCallback } from "react";
import Sticky from "../Sticky/Sticky";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import setSearchBox from "./actions";


const useSearchChange = dispatch => useCallback(
  event => dispatch(setSearchBox(event.target.value)),[dispatch]);

const Header = () => {
  return (
    <Sticky>
      <h1>Pokedex</h1>
      <SearchBox onChange={useSearchChange(useDispatch())} />
    </Sticky>
  );
};
export default Header;
