import React from "react";
import PokemonGrid from "./PokemonGrid"
import "@testing-library/jest-dom";
import { render, cleanup} from "@testing-library/react";
import { useSelector } from 'react-redux';
import useFetchPokemonEffect from '../../utils/useFetchPokemonEffect';

afterEach(cleanup);

jest.mock('react-redux');
jest.mock('../../utils/useFetchPokemonEffect.js');


it("renders the pokemon grid properly", ()=>{


    useSelector.mockImplementationOnce(()=> []);
    useSelector.mockImplementationOnce(()=> true);
    useSelector.mockImplementationOnce(()=> '');
    useSelector.mockImplementationOnce(()=> false);
    useFetchPokemonEffect.mockResolvedValue([]);

    const { getByText, debug } = render( <PokemonGrid/> );
    debug();
    expect(getByText("Loading...")).toBeInTheDocument();
})

