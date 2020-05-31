import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const card_list = () =>{
    return (
        <div className='container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default card_list;
