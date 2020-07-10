import React from "react";
import Pie from "./Pie";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Test Pie Component", ()=>{
    const { getByText} = render(
        <Pie 
        stats={{
        test1: 50,
        test2: 60,
        test3: 70,
        test4: 80,
        test5: 90,
        test6: 100,
      }}
        />
    )

   expect(getByText("50")).toBeInTheDocument();

   expect(getByText("60")).toBeInTheDocument();

   expect(getByText("70")).toBeInTheDocument();

   expect(getByText("80")).toBeInTheDocument();

   expect(getByText("90")).toBeInTheDocument();
   
   expect(getByText("100")).toBeInTheDocument();
})