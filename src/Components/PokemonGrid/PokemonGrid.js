import React, { useEffect, useMemo } from "react";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { getRandomFromArray, filterArrayByText } from "../../lib/arrayUtil";
import { callPokemonAPI } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const useFetchPokemonEffect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callPokemonAPI());
  }, [dispatch]);
};

const PokemonGrid = () => {
  useFetchPokemonEffect();

  const pokemons = useSelector((state) => state.setPokemon.pokemon);
  const isPending = useSelector((state) => state.setPokemon.isPending);
  const searchField = useSelector((state) => state.changeSearchBox.searchField);
  const hasError = useSelector((state) => state.setPokemon.hasError);

  const randomPokemon = useMemo(() => getRandomFromArray(pokemons, 15), [
    pokemons,
  ]);

  return (
    <Scroll>
      <ErrorBoundary>
        {hasError ? (
          <h1>Something Went Wrong...</h1>
        ) : isPending ? (
          <h1>Loading...</h1>
        ) : (
          <CardList
            pokemons={
              searchField
                ? filterArrayByText(pokemons, searchField, 15)
                : randomPokemon
            }
          />
        )}
      </ErrorBoundary>
    </Scroll>
  );
};

export default PokemonGrid;
