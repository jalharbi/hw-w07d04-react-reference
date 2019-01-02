import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Content from './components/Content';
import ComponentInfo from './components/ComponentInfo';
import './App.css';
import PropsInfo from './components/PropsInfo';
import StateInfo from './components/StateInfo';
import JSXInfo from './components/JSXInfo';
import Footer from './components/Footer';
import LyfeCycleInfo from './components/LyfeCycleInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      <div className="content">
        <Content/>
      </div>
      <div className="component">
      <ComponentInfo/>
      </div>
      <div className="pops"> 
      <PropsInfo/>
      </div>
      <div className="stateInf">
      <StateInfo/>
      </div>
      <div className="stateinfo">
      <JSXInfo/>
      </div>
<div className="footer">
<Footer/>
</div>
<div className="lifecycle">
<LyfeCycleInfo/>
</div>
      </div>
    );
  }
}

export default App;
