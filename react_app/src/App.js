import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import LoginModal from './Components/LoginModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'home',
      user: ''
    };

  }

  onChange(field, value){
    this.setState({[field]: value})
    console.log('current user is',this.state.user)
  }

  render() {
    if(this.state.user === ''){
      if(this.state.route === 'login'){
        return (
          <div className="App">
            <NavBar onChange={this.onChange.bind(this)} />
            <Hero />
            <LoginModal onChange={this.onChange.bind(this)} />
          </div>
        );
      }
      else if(this.state.route === 'claim') {
        return(
          <NavBar onChange={this.onChange.bind(this)} />
        );
      }
      else {
        return (
          <div className="App">
            <NavBar onChange={this.onChange.bind(this)} />
            <Hero />
          </div>
        );
      }
    } else {
      return(
        <h1>spaghetti code </h1>
      )
    }
  }
}

export default App;
