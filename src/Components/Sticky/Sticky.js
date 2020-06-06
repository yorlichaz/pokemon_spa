import React from 'react';
import './Sticky.css';

const Sticky = (props)=>{
    return (
        <div className='sticky' >
            {props.children}
        </div>
    )

};

export default Sticky;