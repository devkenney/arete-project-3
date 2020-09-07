import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Navbar(props) {
    let navItems = [
        <Nav.Item key={1}>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>,
        <Nav.Item key={2}>
            <Nav.Link href="/memorial">Memorial</Nav.Link>
        </Nav.Item>,
        <Nav.Item>
            <Nav.Link href="/comics">Comics</Nav.Link>
        </Nav.Item>
    ];
    if (props.isLoggedIn) {
        navItems.push(
            <Nav.Item>
                <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav.Item>
        )
    } else {
        navItems.push(
            <Nav.Item key={5}>
                <Nav.Link href="/Sign Up">Sign Up</a>
            </Nav.Item>
        );
        navItems.push(
            <Nav.Item>
                <Nav.Link href="/login">Log In</Nav.Link>
            </Nav.Item>
        );
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>SuperWiki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {navItems}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navbar;