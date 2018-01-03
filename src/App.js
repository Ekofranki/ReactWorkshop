import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MainApp = () => (
	<div className="App">
        <AppHeader />
        <AppIntro />
    </div>
);

const AppHeader = () => (
	<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
);

const AppIntro = () => (
	<p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
);

class App extends Component {
  render() {
    return (
    	<MainApp />
    );
  }
}

export default App;
