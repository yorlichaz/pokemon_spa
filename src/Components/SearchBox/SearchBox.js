import React, { Fragment } from 'react';
import './SearchBox.css'

const SearchBox = ({onChange}) =>{
    return(
        <Fragment>
            <input
            className= 'search-box' 
            type="text"
            placeholder="Search Pokemon"
            onChange = {onChange}
            />
        </Fragment>
    );
};

export default SearchBox;