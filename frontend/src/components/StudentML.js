import React from 'react';
import { Button } from 'react-bootstrap';

const StudentML = (props) => {
    return (

        <tr>
            <td className="text-center">{props.student.carNumber}</td>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td>{props.student.teacher}</td>
            <td>{props.student.siblings}</td>
            <td className="text-center">
                <a href="#" onClick={() => { props.deleteStudent(props.student.carNumber) }}><Button variant="danger">Delete</Button></a>
            </td>
        </tr>

    )
}

export default StudentML

