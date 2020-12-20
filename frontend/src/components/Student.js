import React from 'react';
import { Button } from 'react-bootstrap';

const Student = (props) => {
    return (

        <tr>
            <td className="text-center">
                <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}><Button variant="info">Gone</Button></a>
            </td>
            <td className="text-center">{props.student.carNumber}</td>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td>{props.student.teacher}</td>
            <td>{props.student.siblings}</td>
        </tr>

    )
}

export default Student
