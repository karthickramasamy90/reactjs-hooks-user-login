import React, { useEffect, useRef } from 'react';
import { Row, Container, Col, Button, FormText } from 'react-bootstrap';

function Dashboard() {
    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
        console.log("divElement", divElement)
    }, [])
    return(
        <Container>
            <Row>
                <h1>Welcome to dashbaord screen</h1>
                <div ref={elementRef}>Hello Karthick Ramasamy</div>
            </Row>
        </Container>
    )
}

export default Dashboard;