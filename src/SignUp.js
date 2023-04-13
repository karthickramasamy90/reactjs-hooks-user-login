import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formValues, setFormValues] = useState({});

    const handleOnChange = (event) => {
        event.preventDefault();
        setFormValues((values) => ({
            ...values,
            [event.target.name]: event.target.value.trim()
        }))
    }

    const onSubmit = () => {
        console.log("formValues", formValues);
    }


    let inputStyle = {
        padding: "5px 5px",
        margin: "auto 50px",
        display: 'block',
        marginBottom: "10px",
        width: "100%"
    }

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h2>Sign Up</h2>
                    <input style={inputStyle} type="text" name="username" onChange={handleOnChange} placeholder="User Name" />
                    <input style={inputStyle} type="text" name="email" onChange={handleOnChange} placeholder="Enter your email id" />
                    <input style={inputStyle} type="text" name="gender" onChange={handleOnChange} placeholder="Gender" />
                    <input style={inputStyle} type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                    <Button style={{ 'float': 'right' }} onClick={onSubmit}>Submit</Button>

                    <p>Already have an account? <Link to="/login">Log in here</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;