import { SET_SEARCH_BOX } from './actionTypes';

const initialState = {
    searchField: ''
}

const changeSearchBox = (state = initialState, action = {}) => {
    switch (action.type){
        case SET_SEARCH_BOX:
            return Object.assign({},state, { searchField: action.text});
        
        default:
            return state;
    }
}

export default changeSearchBox;