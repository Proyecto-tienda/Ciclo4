import { Container, Row, Table, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
import productsJson from "./data/productos.json";
import { Link } from "react-router-dom"


export const ModificarProductos = () => {
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
    return (
        <Container>
            <Row>
                <Table variant={"hover"} className={"table-bordered"}>
                    <thead className={"bg-dark text-light text-center"}>
                        <tr>
                            <th>Id</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
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
                                            <td className={"text-end"}>{product.category}</td>
                                            <td className={"text-end"}>{product.price}</td>
                                            <td className={"text-end"}>{product.cant}</td>
                                            <td>
                                                <Container>

                                                    <div className="d-grid gap-2">
                                                        <Button variant="outlined" size="sm"><Link className="btn btn-primary mx-auto" to="/modificar"><i></i>Modificar</Link> </Button>
                                                    </div>
                                                    <Row className={"pt-2"}>
                                                        <Button variant="danger col-9 mx-auto" size="sm">Eliminar</Button>
                                                    </Row>
                                                </Container>
                                            </td>
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