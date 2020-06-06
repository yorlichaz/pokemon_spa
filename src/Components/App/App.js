import React from "react";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";
import Sticky from "../Sticky/Sticky";
import getRandomFromArray from "../../utils/getRandomFromArray";
import filterArrayByName from "../../utils/filterArrayByName";
import setSearchBox from "../SearchBox/actions";
import { callPokemonAPI } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.changeSearchBox.searchField,
    isPending: state.setPokemon.isPending,
    pokemons: state.setPokemon.pokemon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => dispatch(callPokemonAPI()),
    onSearchChange: (event) => {
      dispatch(setSearchBox(event.target.value));
    },
  };
};

// const App = ({onSearchChange, fetchPokemon, pokemons, isPending, searchField}) => {
//   console.log("in");
//   useEffect(()=>{
//     fetchPokemon();
//   },[fetchPokemon]);

//   return (
//     <div className="root-container">
//       <Sticky>
//         <h1>Pokedex</h1>
//         <SearchBox onChange = {onSearchChange}/>
//       </Sticky>
//       <Scroll>
//         {isPending? <h1> Loading... </h1>: <CardList pokemons={searchField? filterArrayByName(pokemons,searchField): getRandomFromArray(pokemons,10)}/>}
//       </Scroll>
//     </div>
//   );
// }

class App extends React.Component {

  componentDidMount(){
    this.props.fetchPokemon();
  }

  render() {
    const {onSearchChange, pokemons, isPending, searchField} = this.props;

    return (
      <div className="root-container">
        <Sticky>
          <h1>Pokedex</h1>
          <SearchBox onChange={onSearchChange} />
        </Sticky>
        <Scroll>
          {isPending ? (
            <h1> Loading... </h1>
          ) : (
            <CardList
              pokemons={
                searchField
                  ? filterArrayByName(pokemons, searchField).slice(0,20)
                  : getRandomFromArray(pokemons, 15)
              }
            />
          )}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
