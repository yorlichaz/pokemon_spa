import React from 'react';
import './Sticky.css';

const Sticky = (props)=>{
    return (
        <header className='sticky' >
            {props.children}
        </header>
    )

};

export default Sticky;