import React, { Component } from 'react'
import { Button, Card, Image, Container, Input } from 'semantic-ui-react'

export default class Policy extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            start: '',
            end: '',
            type: ''
        }
    }

    render(){
        if (this.props.user === 'insured'){
            
            if(this.props.isLive == true){
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
            else if(this.props.isLive == false && this.props.premium == 0) {
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
                                <Button basic compact color='green'>Accept</Button>
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
                                <Input placeholder='Premium' />
                                <Input placeholder='MaxLimit' />
                            </Card.Description>
                            <Card.Content extra>
                                <Button basic compact color='green'>Send Offer</Button>
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