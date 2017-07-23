import React, { Component } from 'react'
import { Button, Form, Checkbox, Container} from 'semantic-ui-react'
import Policy from './Policy';

import axios from 'axios';
import './main.css'

export default class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      policy_id: '',
      policy_type: '',
      policy_start: '',
      policy_stop: '',
      formLoading: false,
      submitButtonColor: 'black'
    }
  }


  submitPolicy(){
    this.setState({
      formLoading: true
    })
    axios.get('http://127.0.0.1:5000/insured/submit_policy',{
      params: {
        id: this.state.policy_id,
        start: this.state.policy_start,
        end: this.state.policy_stop,
        type: this.state.policy_type
      }
    }).then((res) =>{
      console.log(res)
      if(res.data.msg === 'success'){
        this.setState({
          formLoading: false,
          submitButtonColor: 'green'
        })
        this.onUserChange(res.data.username);
      }
      else {
        this.setState({
          formLoading: false,
          submitButtonColor: 'red'
        })
      }
    })
    .catch((err) =>{
      console.log(err)
    })
  }


  updateInput(input, evt){
    this.setState({
      [input]: evt.target.value
    })
    console.log(`${input} => ${evt.target.value}`)
  }

  render(){
    if(this.props.user === 'insured'){
      if(this.props.action == 0){
        return(
          <Container className="dash-form">
            <h2>Submit policy</h2>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Policy ID</label>
                  <input placeholder='Policy ID' 
                  onChange={evt => this.updateInput('policy_id', evt)} />
                </Form.Field>
                <Form.Field>
                  <label>Policy Type</label>
                  <input placeholder='Policy Type'
                  onChange={evt => this.updateInput('policy_type', evt)} />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Policy Start Date</label>
                  <input placeholder='Policy Start Date'
                  onChange={evt => this.updateInput('policy_start', evt)} />
                </Form.Field>
                <Form.Field>
                  <label>Policy End Date</label>
                  <input placeholder='Policy End Date'
                  onChange={evt => this.updateInput('policy_stop', evt)} />
                </Form.Field>
              </Form.Group>
              <Button color={this.state.submitButtonColor} 
              loading={this.state.formLoading} 
              onClick={() => {this.submitPolicy()}}>Submit</Button>
            </Form>
          </Container>
        )
      }
      else if(this.props.action == 1){
        // we get all policies from db and create iterable
        return(
          <Container className="dash-form">
            <Policy id={1} start="1 november 2017" 
            end="1 november 2018" type="car" />
          </Container>
        )
      }
    }
    else if (this.props.user === 'insurer'){
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
    else if (this.props.user === 'expert'){
      return(
        <h1>This is {this.props.user}</h1>
      )
    }
    
  }
}
