import React from 'react';
import './Scroll.css'

const Scroll = (props)=>{
    return (
        <section className='scrollable' >
            {props.children}
        </section>
    )

};

export default Scroll
