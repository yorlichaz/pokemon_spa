import React from "react";
import CardList from './CardList';
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

jest.mock('../Card/Card.js', ()=>()=>(<div data-testid="card-list">Card</div>));

it("should render CardList component with Card objs", ()=>{
    const pokemons = [{}, {}]

    const { getAllByTestId } = render(
        <CardList pokemons={pokemons} />
    );

    expect(getAllByTestId("card-list")).toHaveLength(pokemons.length);


})