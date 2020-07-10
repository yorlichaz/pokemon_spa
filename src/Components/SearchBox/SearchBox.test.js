import React from "react";
import SearchBox from "./SearchBox";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

it("Test input of searchbox",()=>{
    const onChange = jest.fn();
    
    const { getByTestId } = render(
        <SearchBox onChange={onChange}/>
       
    )
    expect(getByTestId("search-bar").getAttribute("placeholder")).toBe("Search Pokemon");
    fireEvent.change(getByTestId("search-bar"),{target: { value: 'pikachu'}});
    expect(getByTestId("search-bar").value).toBe('pikachu');
    expect(onChange).toHaveBeenCalled();
})