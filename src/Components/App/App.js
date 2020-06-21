import React, {Fragment, useEffect, useMemo} from "react";
import "./App.css";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";
import { getRandomFromArray, filterArrayByText } from "../../lib/arrayUtil"
import { callPokemonAPI, failedPokemon } from "./actions";
import { connect } from "react-redux";
import Header from "../Header/Header"

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
    onError: (error) => {
      dispatch(failedPokemon(error));
    },
  };
};

const App = ({fetchPokemon, pokemons, isPending, searchField}) => {
  
  useEffect(()=>{
    fetchPokemon();
  },[fetchPokemon]);

  const randomPokemon = useMemo(() => getRandomFromArray(pokemons,15),[pokemons])

  return (
    <Fragment>
      <Header/>
      <Scroll>
        {isPending? <h1> Loading... </h1>: <CardList pokemons={searchField? filterArrayByText(pokemons,searchField,15): randomPokemon}/>}
      </Scroll>
    </Fragment>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
