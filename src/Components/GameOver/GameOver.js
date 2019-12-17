import React from 'react';
import DeathButton from '../Buttons/Death';
import NectarButton from '../Buttons/Nectar';
import './GameOver.css'
import { CSSTransition } from 'react-transition-group';

class GameOver extends React.Component {
state={
    fadeIn:false
}
componentDidMount(){
    this.setState({fadeIn : true})
}
render(){
    return (
        <CSSTransition in={this.state.fadeIn}
            timeout={2000}
            classNames="node">
            <div className='gameover'>
                <h2 className="gamur">אתה גמור</h2>
                <h1 className="panasenko">פנסנקו</h1>
                <p className="left">הלך עליי</p>
                <DeathButton onClick={this.props.startagain} />
                <p className="right">אני בעל הנקטר</p>
                <NectarButton onClick={this.props.backwith50} />
            </div>
        </CSSTransition>
    );
}
}


export default GameOver;