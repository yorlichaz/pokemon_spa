import { SET_SEARCH_BOX } from './actionTypes';

const setSearchBox = (text) => {
    return {
        type: SET_SEARCH_BOX,
        text,                   // NOTE: equivalent to text: text
    }
}

export default setSearchBox;