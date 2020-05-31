import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import CardList from "./Components/CardList/CardList";
import * as serviceWorker from "./serviceWorker";
import SearchBox from "./Components/SearchBox/SearchBox";
import Scroll from "./Components/Scroll/Scroll";

ReactDOM.render(
  <React.StrictMode>
    <div className="root-container">
      <h1>Pokedex</h1>
      <SearchBox />
      <Scroll>
        <CardList />
      </Scroll>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
