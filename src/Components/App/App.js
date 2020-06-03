import React from "react";
import "./App.css";
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import Sticky from '../Sticky/Sticky';

import setSearchBox from '../SearchBox/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchBox(event.target.value));
    }
  }
}

const App = ({onSearchChange}) => {
  return (
    <div className="root-container">
      <Sticky>
        <h1>Pokedex</h1>
        <SearchBox onChange = {onSearchChange}/>
      </Sticky>
      <Scroll>
        <CardList />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

