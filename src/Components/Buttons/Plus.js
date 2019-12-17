import React from 'react';
import Plus from '../../assets/MainPage/plus.png';
import './Buttons.css';

const PlusButton = props => {
    return (
    <img src={Plus} alt="plus-button" className="button-plus" onClick={props.onClick}/>
    );
}
 
export default PlusButton;
