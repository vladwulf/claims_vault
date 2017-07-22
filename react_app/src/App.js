import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { x: 4 }
  }

  onChange(field, value){
    console.log(field,value);
    this.setState({[field]: value})
  }

  render() {
    return (
      <div className="App">
        <NavBar onChange={this.onChange.bind(this)} />
        <Hero />
      </div>
    );
  }
}

export default App;
