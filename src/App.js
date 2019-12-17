import React, { Component } from "react";
import HP from "./Components/HP/HP";
import DEF from "./Components/DEF/DEF";
import "./App.css";
import GameOver from "./Components/GameOver/GameOver";
import Logo from "./Components/Wings/Wings";
import FrozenHeart from "./Components/FrozenHeart/FrozenHeart";
import Opening from "./Components/Opening/Opening";
import {CSSTransition} from 'react-transition-group'

class App extends Component {
  state = {
    hpCount: 100,
    defCount: 0,
    logoCounter: 0,
    fhKey: false,
    openinPage: true,
    mainFade: false
  };

  componentDidMount(){
    this.setState({mainFade:true})
  }

  hpDownFive = () => {
    switch (this.state.fhKey) {
      case true:
        this.setState({ fhKey: false });
        break;
      default:
        if (this.state.hpCount > 0)
          this.setState({ hpCount: this.state.hpCount - 5 });
    }
  };

  hpUpFive = () => {
    if (this.state.hpCount >= 0 && this.state.hpCount < 100)
      this.setState({ hpCount: this.state.hpCount + 5 });
  };

  defDownFive = () => {
    switch (this.state.fhKey) {
      case true:
        this.setState({ fhKey: false });
        break;
      default:
        if (this.state.defCount > 0)
          this.setState({ defCount: this.state.defCount - 5 });
    }
  };

  defUpFive = () => {
    if (this.state.defCount >= 0 && this.state.defCount < 50)
      this.setState({ defCount: this.state.defCount + 5 });
  };

  logoCounter = () => {
    if (this.state.logoCounter <= 2) {
      this.setState({ logoCounter: this.state.logoCounter + 1 });
    } else {
      this.setState({ logoCounter: 0 });
    }
  };
  fhKeyHandler = () => {
    if (this.state.fhKey === false) this.setState({ fhKey: true });
    else this.setState({ fhKey: false });
  };
  backWith50 = () => {
    this.setState({hpCount: 50 , defCount: 0 })
  }
  startHandler = () =>{
    if(this.state.openinPage ===true)
    this.setState({openinPage:false});
    else
      this.setState({openinPage:true , hpCount: 100});
      console.log("hey" + this.state.openinPage)
  }

  render() {
    if(this.state.hpCount === 0){
      return <div className="App">
        <GameOver backwith50={this.backWith50} startagain={this.startHandler}/>
        </div>;
    }
    if(this.state.openinPage === true){
      return (<Opening start={this.startHandler}/>)
    }

    return (
      <CSSTransition  in={this.state.mainFade}
      timeout={2000}
      classNames="node">
      <div className="App">
        <DEF
          defCount={this.state.defCount}
          upfunc={this.defUpFive}
          downfunc={this.defDownFive}
        />
        <HP
          hpCount={this.state.hpCount}
          upfunc={this.hpUpFive}
          downfunc={this.hpDownFive}
        />
        <Logo logocounter={this.logoCounter} logokey={this.state.logoCounter} />
        <FrozenHeart
          fhKey={this.state.fhKey}
          fhKeyHandler={this.fhKeyHandler}
        />
        
      </div>
      </CSSTransition>
    );
  }
}

export default App;
