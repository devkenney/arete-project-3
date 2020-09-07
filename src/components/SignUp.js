import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function SignUp(props) {
    return (
        <Container>
            <h1>Create Your Account</h1>

            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label htmlFor="username">USERNAME</Form.Label>
                    <Form.Control type="text" name="username" onChange={props.handleInput} />
                </Form.Group>
                
                <Form.Group controlId="formPassword">
                    <Form.Label htmlFor="password">PASSWORD</Form.Label>
                    <Form.Control type="password" name="password" onChange={props.handleInput} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.handleSignUp}/>
            </Form>
            <p>Already have an account? Log in <a href="#">here.</a></p>
        </Container>
    );
}

export default SignUp;