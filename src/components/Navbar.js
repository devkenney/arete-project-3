import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavbarComponent(props) {
    let navItems = [
        <Nav.Item key={1}>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>,
        <Nav.Item key={2}>
            <Nav.Link href="/memorial">Memorial</Nav.Link>
        </Nav.Item>,
        <Nav.Item key={3}>
            <Nav.Link href="/comics">Comics</Nav.Link>
        </Nav.Item>
    ];

    if (props.isLoggedIn) {
        navItems.push(
            <Nav.Item key={4}>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav.Item>
        );
        navItems.push(
            <Nav.Item key={5}>
                <Nav.Link href="/" onClick={props.handleLogOut}>Log Out</Nav.Link>
            </Nav.Item>
        )
    } else {
        navItems.push(
            <Nav.Item key={4}>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
        );
        navItems.push(
            <Nav.Item key={5}>
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

export default NavbarComponent;