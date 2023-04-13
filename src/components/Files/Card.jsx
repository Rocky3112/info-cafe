import React from 'react';
import './Card.css'
import logo from '../../images/colorful.avif'

const Card = () => {
    return (
        <div className='header'>
           <h2>Knowledge Cafe</h2>
           <img src={logo} /> 
        </div>
    );
};


export default Card;