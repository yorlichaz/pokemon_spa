import React from "react";
import Card from './Card';
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

jest.mock('../FrontCard/FrontCard.js', ()=>()=>(<div data-testid="Front-Card">Front Card</div>));
jest.mock('../BackCard/BackCard.js', ()=>()=>(<div data-testid="Back-Card">Back Card</div>));

it("loads the card component properly", ()=>{

    const { getByTestId } = render(
        <Card id={1} pokemon={{name: "pikachu", img: "pikachu_img"
        , abilities:[]
        , types:[]
        , stats:{}
 }}/>
    ) ;

    expect(getByTestId("Front-Card")).toBeInTheDocument();
    expect(getByTestId("Back-Card")).toBeInTheDocument();
});