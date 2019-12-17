import React , {useState, useEffect} from 'react';
import './Opening.css';
import {CSSTransition} from 'react-transition-group';

const Opening = props => {

    const [Start, setStart] = useState(false);
    useEffect(() => {
        setStart(true)
    }, [])

    return ( <CSSTransition
        in={Start}
        timeout={2000}
        classNames="node">
    <div className="opening">
        <div onClick={() => { props.start(); setStart(false);}} className="start">
        </div>
    </div>
    </CSSTransition>
    );
}

export default Opening;
