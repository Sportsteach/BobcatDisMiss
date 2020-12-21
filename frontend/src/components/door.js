import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Student from './Student'


export default class Door extends Component {
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);
        this.state = { students: [] };

    }
    componentDidMount() {
        axios.get('https://dismissle.herokuapp.com/door')
            .then(res => {
                this.setState({ students: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
        setTimeout(() => {
            window.location = '/door';;
        }, 20000);
    }

    deleteStudent(id) {
        axios.delete('https://dismissle.herokuapp.com/door/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
        window.location = '/door';;
    }
    studentList() {
        return this.state.students.map(currentstudent => {
            return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Door</h3>
                <Table striped bordered hover>
                    <thead className="thead-dark text-center">
                        <tr>
                            <th>Status</th>
                            <th>Car #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Teacher</th>
                            <th>Siblings</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.studentList()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
