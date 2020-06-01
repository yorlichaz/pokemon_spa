import React from "react";
import "./App.css";
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import Sticky from '../Sticky/Sticky';

function App() {
  return (
    <div className="root-container">
      <Sticky>
        <h1>Pokedex</h1>
        <SearchBox />
      </Sticky>
      <Scroll>
        <CardList />
      </Scroll>
    </div>
  );
}

export default App;
