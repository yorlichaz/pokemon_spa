import React, {Fragment} from "react";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";
import Sticky from "../Sticky/Sticky";
import getRandomFromArray from "../../utils/getRandomFromArray";
import filterArrayByName from "../../utils/filterArrayByName";
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

  async componentDidMount() {
    try{
      await this.props.fetchPokemon();
    }catch(err){
      this.props.onError();
    }
  }

  render() {
    const { onSearchChange, pokemons, isPending, searchField } = this.props;

    return (
      <Fragment>
        <Sticky>
          <h1>Pokedex</h1>
          <SearchBox onChange={onSearchChange} />
        </Sticky>
        <Scroll>  
          {isPending ? (
            <h1> Loading... </h1>
          ) : (
            <ErrorBoundry>
              <CardList
                pokemons={
                  searchField
                    ? filterArrayByName(pokemons, searchField).slice(0, 20)
                    : getRandomFromArray(pokemons, 15)
                }
              />
            </ErrorBoundry>
          )}
        </Scroll>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
