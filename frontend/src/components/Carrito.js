import React, {useState} from "react";
import {Col, Container, Row, ButtonGroup, InputGroup, Form, Button, Card} from "react-bootstrap";
import productsJson from "./data/productos.json";

const Carrito = () => {
    const [products, setProducts] = useState(productsJson);
    const [newProduct, setNewProduct] = useState({
        id: "",
        image: "",
        name: "",
        description: "",
        features: "",
        price: 0,
        cant: 0
    })
    const editId = (idlp) => {
        setNewProduct({id: idlp})
    }
    const editImage = (imagelp) => {
        setNewProduct({image: imagelp})
    }
    const editName = (namelp) => {
        setNewProduct({name: namelp})
    }
    const editDescription = (descriptionlp) => {
        setNewProduct({description: descriptionlp})
    }
    const editFeatures = (featureslp) => {
        setNewProduct({features: featureslp})
    }
    const editPrice = (pricelp) => {
        setNewProduct({price: pricelp})
    }

    const editCant = (cantlp) => {
        setNewProduct({cant: cantlp})
    }

    const deleteProduct = (id) => {
        const listProductsNew = products.filter(
            (product) => (product.id !== id)
        )
        setProducts(listProductsNew)
    }
    const addProduct = () => {
        setProducts([products, newProduct])
    }
    return (
        <Container>
            <Row>
                {products.map((product) => {
                        //let {id, image, name, description, features, price, cant} = product
                        return (
                            <Col className="d-flex" style={{width: '18rem'}}>
                                <Card className={"flex-fill mt-2"} key={product.id}>
                                    <Card.Header>
                                        <Card.Img variant="top" src={product.image ? product.image : null}
                                                  className={"rounded mx-auto d-block"}
                                                  style={{width: '10rem', height: '10rem'}}/>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>{product.features}</Card.Text>
                                        <Card.Text>$ {product.price}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row className={"text-end"}>
                                            <Card.Text><h5>Stock: {product.cant}</h5></Card.Text>
                                        </Row>
                                        <Row className={"mt-2"} hidden={true}>
                                            <Col md={9} className={"justify-content-left"}>
                                                <ButtonGroup className={"btn-group-sm"}>
                                                    <Button variant="success" onClick={() => {
                                                        product.cant = product.cant++
                                                    }}>+</Button>
                                                    <Button variant="danger" onClick={() => {
                                                        product.cant = product.cant--
                                                    }}>-</Button>
                                                </ButtonGroup>
                                            </Col>
                                            <Col md={3} className={"text-end"}>
                                                <Button variant={"secondary"} className={"btn-sm"} onClick={() => {
                                                    deleteProduct(product.id)
                                                }}><i className="fa-solid fa-trash"></i></Button>
                                            </Col>
                                        </Row>
                                        <Row className={"mt-2"}>
                                            <div className="d-grid gap-2">
                                                <Button variant="primary"><i className="fa-solid fa-money-bill"></i> Comprar</Button>
                                            </div>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    }
                )}
            </Row>
        </Container>
    )
}

export default Carrito;
