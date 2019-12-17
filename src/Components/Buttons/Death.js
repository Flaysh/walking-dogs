import React from 'react';
import Death from '../../assets/GameOver/DEATH.png';
import './Buttons.css';


const DeathButton = props => {
    return (
    <img src={Death} alt="minus-button" onClick={props.onClick} className="button-death"/>
    );
}
 
export default DeathButton;