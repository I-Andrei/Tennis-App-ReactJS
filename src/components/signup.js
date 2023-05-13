import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange_Email(e) {
        setEmail(e.target.value);
    }
    function handleChange_Password(e) {
        setPassword(e.target.value);
    }
    function show(){
        console.log("Email: ", email, "Password: ", password)
    }

    return ( 
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange_Email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange_Password} />
            </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={show}>
            Submit
            </Button>
        </Form>
    );
}

export default SignupForm;