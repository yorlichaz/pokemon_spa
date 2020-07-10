import React, { Fragment } from 'react';
import './SearchBox.css'

const SearchBox = ({onChange}) =>{
    return(
        <Fragment>
            <input
            data-testid="search-bar"
            className= 'search-box' 
            type="text"
            placeholder="Search Pokemon"
            onChange = {onChange}
            />
        </Fragment>
    );
};

export default SearchBox;