import React from 'react';
import Nectar from '../../assets/GameOver/NECTAR.png';
import './Buttons.css';


const NectarButton = props => {
    return (
    <img src={Nectar} alt="minus-button" onClick={props.onClick} className="button-nectar"/>
    );
}
 
export default NectarButton;