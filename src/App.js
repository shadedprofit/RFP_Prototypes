import React, { Component } from 'react';
import Cards from './containers/cards';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="sandbox-container">
        <Cards></Cards>
      </div>
    );
  }
}

export default App;
