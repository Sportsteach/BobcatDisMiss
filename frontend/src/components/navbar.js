
import React, { Component } from 'react';
import { Nav, Navbar, } from 'react-bootstrap';

export default class navbar extends Component {

    render() {
        return (
            <Navbar className="rounded mt-1 " collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Dis-Missle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto rounded">

                        <Nav.Link href="/mainlist">Main List</Nav.Link>
                        <Nav.Link href="/door">Door</Nav.Link>
                        <Nav.Link href="/projector">Projector</Nav.Link>
                        <Nav.Link href="/allstudents">All Students</Nav.Link>
                        <Nav.Link href="/allstudents/new">Add Students</Nav.Link>
                    </Nav>
                    <Nav>
                        <img
                            src="https://i.pinimg.com/originals/13/b9/01/13b90120f2685a8334951fd8e3d53750.png"
                            alt="rocketbus" width="50"></img>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
