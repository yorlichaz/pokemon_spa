import React from "react";
import BackCard from "./BackCard";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
jest.mock('../Pie/Pie.js', () => ()=> <div data-testid="pie-test">Pie Chart</div>);

it("Should render pokemon info", () => {
  const { getByTestId } = render(
    <BackCard
      abilities={["test"]}
      stats={{}}
      types={["nothing"]}
    />
  );

  expect(getByTestId("pie-test")).toBeInTheDocument();
  expect(getByTestId("types-test")).toHaveTextContent("Types: nothing");
  expect(getByTestId("abilities-test")).toHaveTextContent("Abilities: test");
});
