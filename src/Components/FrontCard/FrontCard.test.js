import React from "react";
import FrontCard from "./FrontCard";
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it("Should render pokemon avatar and name", ()=>{
  const { getByTestId } = render(
  <FrontCard
    name="Ditto"
    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  />);

  expect(getByTestId("avatar-img")).toHaveProperty("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");
  expect(getByTestId("avatar-name")).toHaveTextContent("Ditto");
});