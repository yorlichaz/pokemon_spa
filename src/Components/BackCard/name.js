import React from "react";
import BackCard from "./BackCard";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Should render pokemon info", () => {
  const { getByTestId } = render(
    <BackCard
      abilities={["test"]}
      stats={{
        test1: 50,
        test2: 60,
        test3: 70,
        test4: 80,
        test5: 90,
        test6: 100,
      }}
      types={["nothing"]}
    />
  );

  expect(getByTestId("types-test")).toHaveTextContent("Types: nothing");
  expect(getByTestId("abilities-test")).toHaveTextContent("Abilities: test");
});
