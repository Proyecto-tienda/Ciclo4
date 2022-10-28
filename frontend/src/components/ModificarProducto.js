import { Container, Row, Table, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
import productsJson from "./data/productos.json";

export const ModificarProductos = () => {
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
    return (
        <Container>
            <Row>
                <Table variant={"hover"} className={"table-bordered"}>
                    <thead className={"bg-dark text-light text-center"}>
                        <tr>
                            <th>Id</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>descripcion</th>
                            <th>Caracteristicas</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                (product) => {
                                    return (
                                        <tr>
                                            <td className={"text-end"}>{product.id}</td>
                                            <td><Image src={product.image ? product.image : null}
                                                className={"rounded mx-auto d-block"}
                                                style={{ width: '5rem', height: '5rem' }} /></td>
                                            <td className={"text-end"}>{product.name}</td>
                                            <td className={"text-end"}>{product.description}</td>
                                            <td className={"text-end"}>{product.features}</td>
                                            <td className={"text-end"}>{product.price}</td>
                                            <td className={"text-end"}>{product.cant}</td>
                                            
                                            <td ><Button variant="primary" size="lg">Modificar</Button></td>
                                            <td ><Button variant="danger" size="lg">Eliminar</Button></td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}
export default ModificarProductos;