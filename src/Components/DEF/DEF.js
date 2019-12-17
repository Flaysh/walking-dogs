import React  from 'react';
import './DEF.css';
import PlusButton from '../Buttons/Plus';
import MinusButton from '../Buttons/Minus';


const DEF = (props) => {
     return (
        <div className="def">
          <h2>DEF</h2>
          <h1>{props.defCount}</h1>
          <MinusButton onClick={props.downfunc}/>
          <PlusButton onClick={props.upfunc}/>
        </div>
      );
  }

  export default DEF;