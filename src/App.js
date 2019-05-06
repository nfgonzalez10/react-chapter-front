import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toogle from './Toogle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clock: true
    }
    this.showClock = this.showClock.bind(this);

  }

  showClock(hideClock) {
    console.log('show hideClock', hideClock)
    this.setState({
      clock: hideClock
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.clock ? <Clock /> : <p>Hide Clock</p>}
          <Toogle showClock={this.showClock} clockProp = {this.state.clock} />
        </header>
      </div>
    );
  }
}

export default App;
