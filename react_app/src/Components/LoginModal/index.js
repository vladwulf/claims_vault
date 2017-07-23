import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

import axios from 'axios';

export default class LoginModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      connection: '',
      modalOpen: true
    }
  }

  login(){
    axios.get('http://127.0.0.1:5000/login',{
      params: {
        username: this.state.username,
        password: this.state.password
      }
    }).then((res) =>{
      console.log(res)
      if(res.data.msg === 'success'){
        this.setState({
          connection: 'Password is correct!'
        })
        this.onUserChange(res.data.username);
      }
      else {
        this.setState({
          connection: 'Password is incorrect'
        })
      }
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  onUserChange(user){
    this.props.onChange('user', user)
  }

  closeModal(){
    this.setState({
      modalOpen: false
    })
  }

  updateInput(input, evt){
    this.setState({
      [input]: evt.target.value
    })
  }

  render(){
    return(
      <Modal open={this.state.modalOpen} basic size='small'>
        <Header as='h3' textAlign='center'>
          Header form {this.state.connection}
        </Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Login</label>
              <input value={this.state.username}
              onChange={evt => this.updateInput('username', evt)} placeholder='Your login...' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input value={this.state.password}
              onChange={evt => this.updateInput('password', evt)} placeholder='Your password...' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => {this.closeModal()} }>
            <Icon name='remove' /> close
          </Button>
          <Button color='green' inverted onClick={() => {this.login()}}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
