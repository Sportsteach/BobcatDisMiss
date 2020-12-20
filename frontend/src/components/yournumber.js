import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container } from 'react-bootstrap';

export default class YourNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            teacher: '',
            siblings: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/allstudents/yournumber/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    carNumber: response.data.carNumber,
                    firstName: response.data.firstName,
                })
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    render() {
        return (

            <div className="container text-center">
                <h2>Welcome to Car Riders <span className="text-primary">{this.state.lastName} </span>family!</h2>
                <h3>Your Number is:</h3>
                <Container>
                    <Jumbotron style={{ backgroundColor: "SANDYBROWN" }}>
                        <p style={{ fontSize: 260 }}>{this.state.carNumber}</p>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
