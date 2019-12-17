import React  from 'react';
import './HP.css';
import PlusButton from '../Buttons/Plus';
import MinusButton from '../Buttons/Minus';


const HP = (props) => {



     return (
        <div className='hp'>
          <h2>HP</h2>
          <h1>{props.hpCount}</h1>
          <MinusButton onClick={props.downfunc}/>
          <PlusButton onClick={props.upfunc}/>
        </div>        
      );
  }

  export default HP;