import React from 'react';

import './FrozenHeart.css';
import FH0 from '../../assets/MainPage/FRZNHRT0.png';
import FH1 from '../../assets/MainPage/FRZNHRT1.png';

const FrozenHeart = props => {
    if(props.fhKey === true)
    return ( <img src={FH1} alt="FH0" className="fh" onClick={props.fhKeyHandler}/> );
    else
    return ( <img src={FH0} alt="FH0" className="fh" onClick={props.fhKeyHandler}/> );
}

export default FrozenHeart;