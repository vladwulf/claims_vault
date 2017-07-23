import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './main.css'



export default class NavBar extends Component {
  constructor(props){
    super(props);
  }
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.onRouteChange(name);
  }

  onFormChange = (e, {value}) =>{
    this.props.onChange('action', value);
  }


  onRouteChange(navtab){
    this.props.onChange('route', navtab)
    if(navtab === 'home' || navtab === 'claim'){
      this.props.onChange('user', '')
    }
  }
  render() {
    const { activeItem } = this.state
    if(this.props.dashboard){
      return (
        <div>
          <Menu inverted>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='claim' active={activeItem === 'claim'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <span>
                  Action:
                  {' '}
                  <Dropdown inline options={this.props.options}
                  defaultValue={this.props.options[0].value} onChange={this.onFormChange} />
                </span>
              </Menu.Item>
              <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
    else {
      return (
        <div>
          <Menu inverted>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='claim' active={activeItem === 'claim'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              
              <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }
}
