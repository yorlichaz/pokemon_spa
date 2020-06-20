import { combineReducers } from "redux";

export const getAllResults = (url) => {
  const iter = async (url, result) => {
    const response = await (await fetch(url)).json();
    return (response.next === null
      ? result.concat(response.results)
      : iter(response.next, result.concat(response.results)));
  };
  return iter(url, []);
};
