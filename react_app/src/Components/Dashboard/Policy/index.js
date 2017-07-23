import React, { Component } from 'react'
import { Button, Card, Image, Container, Input } from 'semantic-ui-react'

import axios from 'axios';

export default class Policy extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            start: '',
            end: '',
            type: '',
            premium: '',
            max: '',
            buttonLoading: false,
            buttonColor: 'black'
        }
    }

    updateInput(input, evt){
      this.setState({
        [input]: evt.target.value
      })
    }


    acceptPrice(){
      this.setState({
          buttonLoading: true,
        })
        axios.get('http://127.0.0.1:5000/insured/accept_policy',{
          params: {
            id: this.props.id,
          }
        }).then((res) =>{
          if(res.data.msg === 'success'){
            this.setState({
              buttonLoading: false,
              buttonColor: 'green'
            })
          }
          else {
            this.setState({
              buttonLoading: false,
              buttonColor: 'red'
            })
          }
        })
        .catch((err) =>{
          console.log(err)
        })
    }

    

    submitPrice(){
        this.setState({
          buttonLoading: true,
        })
        axios.get('http://127.0.0.1:5000/insurer/submit_price',{
          params: {
            user: this.props.user,
            max: this.state.max,
            premium: this.state.premium
          }
        }).then((res) =>{
          if(res.data.msg === 'success'){
            this.setState({
              buttonLoading: false,
              buttonColor: 'green'
            })
          }
          else {
            this.setState({
              buttonLoading: false,
              buttonColor: 'red'
            })
          }
        })
        .catch((err) =>{
          console.log(err)
        })
    }

    render(){
        if (this.props.user === 'insured'){
            
            if(this.props.isLive.toString() == 'true'){
                // if insured and policy accepted
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Proposal
                            </Card.Header>
                            <Card.Meta>
                                Accepted
                            </Card.Meta>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <p>Policy Premium: {this.props.premium}</p>
                                <p>Policy Max Limit: {this.props.max}</p>
                                <p>Policy accepted: {this.props.isLive}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
            else if(this.props.isLive.toString() == 'false' && parseInt(this.props.premium) === 0) {
                // if insured but no insurer feedback yet
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Proposal
                            </Card.Header>
                            <Card.Meta>
                                Awaiting Insurer
                            </Card.Meta>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <p>Policy Premium: {this.props.premium}</p>
                                <p>Policy Max Limit: {this.props.max}</p>
                                <p>Policy accepted: {this.props.isLive}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
            else {
                console.log(this.props.isLive,this.props.premium)
                // if insured and policy not accepted after insurer feedback
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Proposal
                            </Card.Header>
                            <Card.Meta>
                                Awaiting Insurer
                            </Card.Meta>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <p>Policy Premium: {this.props.premium}</p>
                                <p>Policy Max Limit: {this.props.max}</p>
                                <p>Policy accepted: {this.props.isLive}</p>
                            </Card.Description>
                            <Card.Content extra>
                                <Button basic compact
                                color={this.state.buttonColor}
                                loading={this.state.buttonLoading}
                                color='green'>Accept</Button>
                            </Card.Content>
                        </Card.Content>
                    </Card>
                )
            }
        }
        if(this.props.user === 'insurer'){
            if(this.props.premium == 0){
                // if insured and no choice yet
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Proposal
                            </Card.Header>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <Input placeholder='Premium' onChange={evt => this.updateInput('premium', evt)} />
                                <Input placeholder='MaxLimit' onChange={evt => this.updateInput('max', evt)} />
                            </Card.Description>
                            <Card.Content extra>
                                <Button basic compact
                                color={this.state.buttonColor}
                                loading={this.state.buttonLoading}
                                onClick={() => {this.submitPrice()}}
                                color='green'>Send Offer</Button>
                            </Card.Content>
                        </Card.Content>
                    </Card>
                )
            }
            else if(this.props.premium > 0 && this.props.isLive == false) {
                // if insured and premium chosen but not accepted
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Proposal
                            </Card.Header>
                            <Card.Meta>
                                Offer Sent
                            </Card.Meta>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <p>Policy Max Limit: {this.props.max}</p>
                                <p>Policy accepted: {this.props.isLive}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
            else if (this.props.premium > 0 && this.props.isLive == true){
                return(
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Policy Accepted
                            </Card.Header>
                            <Card.Description>
                                <p>Policy ID: {this.props.id}</p>
                                <p>Policy Start Time: {this.props.start}</p>
                                <p>Policy End Time: {this.props.end}</p>
                                <p>Policy Type: {this.props.type}</p>
                                <p>Policy Max Limit: {this.props.max}</p>
                                <p>Policy accepted: {this.props.isLive}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            }
        }
    }
}