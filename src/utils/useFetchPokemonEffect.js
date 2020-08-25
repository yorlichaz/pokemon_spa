import { callPokemonAPI } from "../Components/PokemonGrid/actions";
import { useDispatch } from "react-redux";
import {useEffect } from 'react';

const useFetchPokemonEffect = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(callPokemonAPI());
    }, [dispatch]);
  };

  export default useFetchPokemonEffect;