import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Student from './StudentAll'


export default class AllStudents extends Component {
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);
        this.state = { students: [] };

    }
    componentDidMount() {
        axios.get('https://dismissle.herokuapp.com/allstudents')
            .then(res => {
                this.setState({ students: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteStudent(id) {
        axios.delete('https://dismissle.herokuapp.com/allstudents/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
    }
    studentList() {
        return this.state.students.map(currentstudent => {
            return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>All Students</h3>

                <Table striped bordered hover size="sm">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th>Car #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Teacher</th>
                            <th>Siblings</th>
                            <th>Edit</th>
                            <th>Delete</th>
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
