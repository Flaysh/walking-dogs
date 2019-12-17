import React from 'react';
import Minus from '../../assets/MainPage/minus.png';
import './Buttons.css';


const MinusButton = props => {
    return (
    <img src={Minus} alt="minus-button" onClick={props.onClick} className="button-minus"/>
    );
}
 
export default MinusButton;