import React,{useState} from "react";
import productsJson from "./datos.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Col, Container, Row, ButtonGroup, InputGroup, Form} from "react-bootstrap";

const Carrito = () => {
    const [products,setProducts] = useState(productsJson);
    const [newProduct,setNewProduct] = useState({id:"", image:"", name:"", description:"", features:"", price:0, cant:0})
    const editId = (idlp)=> {
        setNewProduct({id:idlp})
    }
    const editImage = (imagelp)=> {
        setNewProduct({image:imagelp})
    }
    const editName = (namelp)=> {
        setNewProduct({name:namelp})
    }
    const editDescription = (descriptionlp)=> {
        setNewProduct({description:descriptionlp})
    }
    const editFeatures = (featureslp)=> {
        setNewProduct({features:featureslp})
    }
    const editPrice = (pricelp)=> {
        setNewProduct({price:pricelp})
    }

    const editCant = (cantlp)=> {
        setNewProduct({cant:cantlp})
    }

    const deleteProduct=(id)=>{
        const listProductsNew = products.filter(
            (product)=>(product.id !== id)
        )
        setProducts(listProductsNew)
    }
    const addProduct = () => {
        setProducts([products, newProduct])
    }

    return (
        <Container>
            <Row>
                <Col className={"col-9"}></Col>
                <Col className={"col"}><h3>Total: $ 10000000</h3></Col>
            </Row>
            <Row>
                {products.map((product) => {
                        //let {id, image, name, description, features, price, cant} = product
                        return (
                            <Col className="d-flex" style={{width: '18rem'}}>
                                <Card className={"flex-fill mt-2"} key={product.id}>
                                    <Card.Header>
                                        <Card.Img variant="top" src={product.image? product.image:null} className={"rounded mx-auto d-block"}
                                                  style={{width: '10rem', height: '10rem'}}/>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>{product.features}</Card.Text>
                                        <Card.Text>$ {product.price}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id={product.cant}>Cant</InputGroup.Text>
                                                <Form.Control type={"number"} placeholder={product.cant}/>
                                            </InputGroup>
                                        </Row>
                                        <Row>
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
                                            <Col md={3} className={"justify-content-right"}>
                                                <Button variant={"secondary"} className={"btn-sm"} onClick={()=>{deleteProduct(product.id)}}><i className="fa-solid fa-trash"></i></Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    }
                )}
            </Row>
            <Row className={"mt-2"}>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg"><i className="fa-solid fa-money-bill"></i> Finalizar Compra</Button>
                    <Button variant="danger" size="lg"><i className="fa-solid fa-ban"></i> Cancelar Compra</Button>
                </div>
            </Row>
        </Container>
    )
}

export default Carrito;
