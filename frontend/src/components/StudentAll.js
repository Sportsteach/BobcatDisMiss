import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StudentAll = (props) => {
    return (

        <tr>
            <td className="text-center">{props.student.carNumber}</td>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td>{props.student.teacher}</td>
            <td>{props.student.siblings}</td>

            <td className="text-center">

                <Link to={"allstudents/edit/" + props.student._id}><Button variant="warning" c>Edit</Button></Link>

            </td>
            <td className="text-center">
                <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}><Button variant="danger">Delete</Button></a>
            </td>
        </tr>

    )
}

export default StudentAll
