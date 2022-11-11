import React, { useEffect, useState } from "react";
import { Col, Container, Row, ButtonGroup, InputGroup, Form, Button, Card } from "react-bootstrap";
import productsJson from "./data/productos.json";
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

const ListaProdAdmin = () => {


    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(getProducts());
    },[dispatch])



    const [products, setProducts] = useState(productsJson);
    const [newProduct, setNewProduct] = useState({
        id: "",
        image: "",
        name: "",
        description: "",
        category: "",
        price: 0,
        cant: 0
    })
    const editId = (idlp) => {
        setNewProduct({ id: idlp })
    }
    const editImage = (imagelp) => {
        setNewProduct({ image: imagelp })
    }
    const editName = (namelp) => {
        setNewProduct({ name: namelp })
    }
    const editDescription = (descriptionlp) => {
        setNewProduct({ description: descriptionlp })
    }
    const editCategory = (categorylp) => {
        setNewProduct({ category: categorylp })
    }
    const editPrice = (pricelp) => {
        setNewProduct({ price: pricelp })
    }
    const editCant = (cantlp) => {
        setNewProduct({ cant: cantlp })
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

                        <Col className="d-flex" style={{ width: '18rem' }}>
                            <Card className={"flex-fill mt-2"} key={product.id}>
                                <Card.Header>
                                    <Card.Img variant="top" src={product.image ? product.image : null}
                                        className={"rounded mx-auto d-block"}
                                        style={{ width: '10rem', height: '10rem' }} />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text>{product.category}</Card.Text>
                                    <Card.Text>$ {product.price}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                   
                                </Card.Footer>
                            </Card></Col>
                    )
                }
                )}

                <div className="d-grid gap-2">
                    <Button variant="outlined" size="sm"><Link className="btn btn-primary m-3  col-4 mx-auto" to="/new"><i></i> Agregar producto</Link> </Button>
                </div>

            </Row>

        </Container>
    )
}

export default ListaProdAdmin;
