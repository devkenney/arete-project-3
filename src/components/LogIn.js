import React from "react";
import { Form, Button } from 'react-bootstrap';

function LogIn(props) {
    return (
        <Form>
            <h1>Log In</h1>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={props.handleInput} />
            </Form.Group>


            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={props.handleInput} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={props.handleLogIn}>Log In</Button>
        </Form>
    );
}

export default LogIn;