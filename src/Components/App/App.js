import React, {Fragment, useEffect, useMemo} from "react";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";
import Sticky from "../Sticky/Sticky";
import { getRandomFromArray, filterArrayByText } from "../../lib/arrayUtil"
import setSearchBox from "../SearchBox/actions";
import { callPokemonAPI, failedPokemon } from "./actions";
import { connect } from "react-redux";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const mapStateToProps = (state) => {
  return {
    searchField: state.changeSearchBox.searchField,
    isPending: state.setPokemon.isPending,
    pokemons: state.setPokemon.pokemon,
    hasError: state.setPokemon.hasError,
    error: state.setPokemon.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => dispatch(callPokemonAPI()),
    onSearchChange: (event) => {
      dispatch(setSearchBox(event.target.value));
    },
    onError: (error) => {
      dispatch(failedPokemon(error));
    },
  };
};

const App = ({onSearchChange, fetchPokemon, pokemons, isPending, searchField}) => {
  
  useEffect(()=>{
    fetchPokemon();
  },[fetchPokemon]);

  const randomPokemon = useMemo(() => getRandomFromArray(pokemons,15),[pokemons])

  return (
    <Fragment>
      <Sticky>
        <h1>Pokedex</h1>
        <SearchBox onChange = {onSearchChange}/>
      </Sticky>
      <Scroll>
        {isPending? <h1> Loading... </h1>: <CardList pokemons={searchField? filterArrayByText(pokemons,searchField,15): randomPokemon}/>}
      </Scroll>
    </Fragment>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
