import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Products() {

    const [products, setProducts] = useState([]);
    const [formValues, setFormValues] = useState({});
    const [showForm, setShowForm] = useState(false);

    const handleOnChange = (event) => {
        setFormValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }

    const addProduct = () => {        
        products.push({...formValues});
        setProducts(products)
    }

    const addNewProduct = () => {
        let showFormField = showForm;

        if(!showFormField) {
            setShowForm(true)
        } else {
            setShowForm(false)
        }
    }

    useEffect(() => {
        cardView(products)
    }, products)

    const cardView = (products) => {
        {
            products && products.map((product, index) => {
            let {productName, sku, price, description } = product;
            return (
                <Card key={index} style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{productName}111</Card.Title>
                        <Card.Text>
                        {sku}
                        </Card.Text>
                        <Card.Text>
                        {price}
                        </Card.Text>
                        <Card.Text>
                        {description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                )
            }) 
        }
    }

    console.log("forn values", formValues)
    console.log("products", products)
    console.log("showForm", showForm)
    // console.log("productsList", productsList)

    const inputStyle = {
        marginBottom: "10px"
    }
    return(
        <>
            <Container>
                <Row style={{ 'float': 'right' }}>
                    <Col>
                        <Button type="submit" onClick={addNewProduct} > Add New Product </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {showForm && <Col>
                        <div>
                        <Col md="2"><label>Product Name: </label> </Col>
                            <input style={inputStyle} type="text" name="productName" onChange={handleOnChange} />
                        </div>
                       

                        <div>
                        <Col md="2"><label>SKU: </label></Col>
                            <input style={inputStyle} type="text" name="sku" onChange={handleOnChange} />
                        </div>

                        <div>
                        <Col md="2"><label>Price: </label></Col>
                            <input style={inputStyle} type="text" name="price" onChange={handleOnChange} />
                        </div>

                        <div>
                        <Col md="2"><label>Description: </label></Col>
                            <input style={inputStyle} type="text" name="description" onChange={handleOnChange} />
                        </div>
                        <Button type="submit" onClick={addProduct} > Add Product </Button>
                    </Col>}
                </Row>
                <Row className="mt-3">
                    <Col>
                        {products && <h2>Products List</h2> }
                            {
                                products && products.map((product, index) => {
                                let {productName, sku, price, description } = product;
                                return (
                                    <Card key={index} style={{ width: '12rem' }}>
                                        <img src="https://t3.ftcdn.net/jpg/04/02/18/96/360_F_402189681_bbSGA1vAgbo5l7PRZdaIbCVJm4BMPbqq.jpg" />
                                        <Card.Body>
                                            <Card.Title>{productName}</Card.Title>
                                            <Card.Text>
                                            {sku}
                                            </Card.Text>
                                            <Card.Text>
                                            {price}
                                            </Card.Text>
                                            <Card.Text>
                                            {description}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    )
                                }) 
                            }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products;