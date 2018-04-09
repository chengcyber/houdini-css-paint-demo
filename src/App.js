import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Warning from './warning'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notSupport: false,
    }
  }

  componentDidMount() {
    if (
      'paintWorklet' in CSS &&
      'CSSUnitValue' in window
    ) {
      CSS.paintWorklet.addModule('worklet.js')
    } else {
      this.setState({
        notSupport: true,
      })
    }
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info)
    this.setState({
      notSupport: true,
    })
  }

  render() {
    const notSupport = this.state.notSupport
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Houdini World</h1>
        </header>
        <Warning show={notSupport} />
        {!notSupport &&
          <React.Fragment>
            <Demo1 />
            <Demo2 />
            <Demo3 />
            <Demo4 />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
