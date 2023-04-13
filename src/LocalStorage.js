import React, { useState } from 'react';
import { Container, Row, Col, FormLabel, Button } from "react-bootstrap";

const LocalStorageComponent = () => {
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

  
  function handleOnChange(event) {
      console.log(event.target.value)
      setSelectedOption(event.target.value);
  }
  
  function handleMessage(event) {
      setMessage(event.target.value);
  }
  
  function handleSubmit() {
      localStorage.setItem(selectedOption, message)
  }
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <FormLabel>Select Message type: </FormLabel>
                        <select name='selectedOption' placeholder="Select Message" onChange={handleOnChange}>
                            <option>Select Message</option>
                            <option value="success">Success</option>
                            <option value="failure">Failure</option>
                            <option value="warning">Warning</option>
                        </select>
                    </Col>
            
                    <Col md="12">
                        <FormLabel>Please enter your message here: </FormLabel>
                        <input type="text" name='message' onChange={handleMessage} />
                    </Col>

                    <Col md="12">
                        <Button type="submit" onClick={handleSubmit}>Submit </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
  }

  export default LocalStorageComponent;