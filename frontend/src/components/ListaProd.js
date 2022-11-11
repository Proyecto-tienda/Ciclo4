import React, {useEffect} from "react";
import {Col, Container, Row, Button, Card} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'

const ListaProd = () => {

    const {products} = useSelector(state => state.products)
 
    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(getProducts());
    },[dispatch])

   
    return (
        <Container>
            <Row>
            {products && products.map(producto => (
                        //let {id, image, name, description, features, price, cant} = product
                        
                            <Col className="d-flex" style={{width: '18rem'}}>
                                <Card className={"flex-fill mt-2"} key={producto.id}>
                                    <Card.Header>
                                        <Card.Img variant="top" src={producto.imagen[0].url} alt={producto.imagen[0].public_id}
                                                  className={"rounded mx-auto d-block"}
                                                  style={{width: '10rem', height: '10rem'}}/>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Text>{producto.descripcion}</Card.Text>
                                        <Card.Text>{producto.categoria}</Card.Text>
                                        <Card.Text>$ {producto.precio}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row className={"text-end"}>
                                            <Card.Text><h5>Stock: {producto.inventario}</h5></Card.Text>
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
                        )}
            </Row>
        </Container>
    )
    
}

export default ListaProd;
