import React, { useEffect } from "react";
import "./App.css";
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import Sticky from '../Sticky/Sticky';

import setSearchBox from '../SearchBox/actions';
import {callPokemonAPI} from './actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    searchField: state.changeSearchBox.searchField,
    isPending: state.setPokemon.isPending,
    pokemons: state.setPokemon.pokemon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => dispatch(callPokemonAPI()),
    onSearchChange: (event) => {
      dispatch(setSearchBox(event.target.value));
    }
  }
}


const App = ({onSearchChange, fetchPokemon, pokemons}) => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="root-container">
      <Sticky>
        <h1>Pokedex</h1>
        <SearchBox onChange = {onSearchChange}/>
      </Sticky>
      <Scroll>
        <CardList pokemons={pokemons}/>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

