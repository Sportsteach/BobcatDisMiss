import React, { Component } from 'react';
import axios from 'axios';
import { Table, Form, Button, Col } from 'react-bootstrap';

import Student from './StudentML'


export default class Mainlist extends Component {
    constructor(props) {
        super(props);
        this.onChangeCarNumber = this.onChangeCarNumber.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            carNumber: '',
            students: []
        };

    }
    componentDidMount() {
        axios.get('http://localhost:5000/mainlist')
            .then(res => {
                this.setState({ students: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeCarNumber(e) {
        this.setState({
            carNumber: e.target.value
        });
    }
    deleteStudent(id) {
        axios.delete('http://localhost:5000/mainlist/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
        window.location = '/mainlist';
    }
    emptyAllLists() {
        axios.delete('http://localhost:5000/allstudents/delete')
            .then(response => { console.log(response.data) });
        window.location = '/mainlist';
    }
    onSubmit(e) {
        e.preventDefault();
        const car = {
            carNumber: this.state.carNumber
        }
        axios.get(`http://localhost:5000/mainlist/${car.carNumber}`)
            .then(res => console.log(res.data));
        this.setState({
            carNumber: ''
        })
        window.location = '/mainlist';
    }

    studentList() {
        return this.state.students.map(currentstudent => {
            return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id} />;
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" srOnly>
                                Number
                    </Form.Label>
                            <Form.Control type="text"
                                required
                                className="form-control"
                                value={this.state.carNumber}
                                onChange={this.onChangeCarNumber}
                                autofocus="autofocus"
                                placeholder="Car #"
                            />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit" className="btn btn-success">Add Car</Button>
                        </Col>
                    </Form.Row>
                </Form>

                <h3>Main List</h3>
                <Table striped bordered hover size="sm">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th>Car #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Teacher</th>
                            <th>Siblings</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.studentList()}
                    </tbody>
                </Table>
                <div className="text-center">
                    <a href="#" onClick={() => { this.emptyAllLists() }}><Button variant="danger">Empty All Lists</Button></a>

                </div>
            </div>
        )
    }
}
