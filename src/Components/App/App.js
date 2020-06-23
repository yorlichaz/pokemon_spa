import React, {Fragment} from "react";
import "./App.css";
import Header from "../Header/Header"
import PokemonGrid from "../PokemonGrid/PokemonGrid";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <PokemonGrid/>
    </Fragment>
  );
}


export default App;