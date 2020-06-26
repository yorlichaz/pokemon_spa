import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import FrontCard from "./FrontCard";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with pokemon name and picture", () => {
  act(() => {
    render(
      <FrontCard
        image={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        name={"Ditto"}
      />,
      container
    );
  });
  expect(container.querySelector("figcaption").textContent).toBe("Ditto");
  expect(container.querySelector("img")["src"]).toBe( "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");
});
