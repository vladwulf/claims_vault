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
                        <Button basic compact color='green'>Send</Button>
                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}