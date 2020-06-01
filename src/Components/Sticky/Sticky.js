import React from 'react';
import './Sticky.css';

const sticky = (props)=>{
    return (
        <div className='sticky' >
            {props.children}
        </div>
    )

};

export default sticky;