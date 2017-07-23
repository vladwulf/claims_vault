
import React, { Component } from 'react'
import { Button, Form, Checkbox, Container} from 'semantic-ui-react'

import axios from 'axios';
import './main.css'

export default class Dashboard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Container className="dash-form">
            <h2>Make claim</h2>
            <Form>
            <Form.Group widths='equal'>
                <Form.Field>
                <label>Policy ID</label>
                <input placeholder='Policy ID' />
                </Form.Field>
                <Form.Field>
                <label>Claim ID</label>
                <input placeholder='Claim ID' />
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Claim</label>
                    <input placeholder='Claim' />
                </Form.Field>
                <Form.Field>
                    <label>Claim Type</label>
                    <input placeholder='Claim Type' />
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input placeholder='Date' />
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Location</label>
                    <input placeholder='Location' />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <label>Supporting Element</label>
                    <input type="file" placeholder='Supporting Element' />
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
}



