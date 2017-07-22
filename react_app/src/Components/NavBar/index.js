import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  test = (e, {name}) =>{
    this.onRouteChange(name)
  }
  onRouteChange(navtab){
    this.props.onChange('route', navtab)
  }
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.test} />
          <Menu.Item name='claim' active={activeItem === 'claim'} onClick={this.test} />
          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
