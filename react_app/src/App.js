import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import LoginModal from './Components/LoginModal';
import Dashboard from './Components/Dashboard';
import Claimant from './Components/Claimant';


const insuredOptions = [
  {key: '0', text: 'Submit Policy', value: 0},
  {key: '1', text: 'My Policies', value: 1}
]

const insurerOptions = [
  {key: '0', text: 'My Policies', value: 0},
  {key: '1', text: 'My Claims', value: 1},
]

const expertOptions = [
  {key: '0', text: 'My Investigations', value: 0}
]


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'home',
      user: '',
      action: 0
    };

  }

  onChange(field, value){
    this.setState({[field]: value})
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
          <div className="App">
            <NavBar onChange={this.onChange.bind(this)} />
            <Claimant />
          </div>
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
      if(this.state.user === 'vlad'){
        return(
          <div className="App">
            <NavBar options={insuredOptions} 
            dashboard={true} onChange={this.onChange.bind(this)} />
            <Dashboard user='vlad' action={this.state.action}  />
          </div>
        )
      }
      if(this.state.user === 'jenny'){
        return(
          <div className="App">
            <NavBar options={insurerOptions}
             dashboard={true} onChange={this.onChange.bind(this)} />
            <Dashboard user='jenny' action={this.state.action} />
          </div>
        )
      }
      if(this.state.user === 'craig'){
        return(
          <div className="App">
            <NavBar options={expertOptions}
             dashboard={true} onChange={this.onChange.bind(this)} />
            <Dashboard user='craig' action={this.state.action} />
          </div>
        )
      }
      
    }
  }
}

export default App;
