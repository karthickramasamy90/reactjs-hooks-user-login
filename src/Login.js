import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button, FormText } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [formValues, setFormValues] = useState({})

    function onChangeValue(event) {
        event.preventDefault()
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }

    function onClickSubmit(event) {
        event.preventDefault();
        setFormValues({ ...values })
    }

    // let Input = (props) => {
    //     let {style, type, name, placeholderText, onChange} = props;
    //     return (
    //         <input style={style} type={type} name={name} onChange={onChange} placeholder={placeholderText} /> 
    //     )
    // }

    let inputStyle = {
        padding: "5px 5px",
        margin: "auto 50px",
        display: 'block',
        marginBottom: "10px",
        width: "100%"
    }
    console.log("values", values)
    console.log("formvalues", formValues)
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <form>
                        <h2>LogIn</h2>
                        <h5>Don't have an accout? <Link to="/signup">Sign Up</Link></h5>

                        <input style={inputStyle} type='text' name='email' onChange={onChangeValue} placeholder='Enter your email Id here' />
                        <input style={inputStyle} type='password' name='password' onChange={onChangeValue} placeholder='Enter your password here' />
                        <Button style={{ 'float': 'right' }} onClick={onClickSubmit}> Submit </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
