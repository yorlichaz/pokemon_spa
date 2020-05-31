import React, { Fragment } from 'react';
import './SearchBox.css'

const SearchBox = () =>{
    return(
        <Fragment>
            <input
            className= 'search-box' 
            type="text"
            placeholder="Search Pokemon"
            />
        </Fragment>
    );
};

export default SearchBox;