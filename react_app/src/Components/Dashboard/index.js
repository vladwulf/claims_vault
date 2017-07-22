import React, { Component } from 'react'
import { Button, Form, Checkbox, Container} from 'semantic-ui-react'

import axios from 'axios';
import './main.css'

export default class Dashboard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.user === 'vlad'){
      return(
        <Container className="dash-form">
          <h2>Propose policy</h2>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Policy ID</label>
                <input placeholder='Policy ID' />
              </Form.Field>
              <Form.Field>
                <label>Policy Type</label>
                <input placeholder='Policy Type' />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Policy Start Date</label>
                <input placeholder='Policy Start Date' />
              </Form.Field>
              <Form.Field>
                <label>Policy End Date</label>
                <input placeholder='Policy End Date' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Container>
      )
    }
    else if (this.props.user === 'jenny'){
      return(
        <Container className="dash-form">
          <h2>Propose policy</h2>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Policy ID</label>
                <input placeholder='Policy ID' />
              </Form.Field>
              <Form.Field>
                <label>Policy Type</label>
                <input placeholder='Policy Type' />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Policy Start Date</label>
                <input placeholder='Policy Start Date' />
              </Form.Field>
              <Form.Field>
                <label>Policy End Date</label>
                <input placeholder='Policy End Date' />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Max Limit</label>
                <input placeholder='Max Limit' />
              </Form.Field>
              <Form.Field>
                <label>Premium</label>
                <input placeholder='Premium' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Container>
      )
    }
    else if (this.props.user === 'craig'){
      return(
        <h1>This is {this.props.user}</h1>
      )
    }
    
  }
}
