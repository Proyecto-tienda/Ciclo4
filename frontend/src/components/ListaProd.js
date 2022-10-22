import React, {useState} from "react";
import {Table, Row, Col, Container, Button, Image} from "react-bootstrap";
import productsJson from "./data/productos.json";

const ListaProd = () => {
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
    const deleteProducts = () => {
        const listProductsNew = [{}]

        setProducts(listProductsNew)
    }
    const addProduct = () => {
        setProducts([products, newProduct])
    }

    return (
        <Container>
            <Row>
                <Table variant={"hover"} className={"table-bordered"}>
                    <thead className={"bg-dark text-light text-center"}>
                    <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(
                            (product) => {
                                return (
                                    <tr>
                                        <td><Image src={product.image ? product.image : null}
                                                   className={"rounded mx-auto d-block"}
                                                   style={{width: '5rem', height: '5rem'}}/></td>
                                        <td className={"text-end"}>{product.cant}</td>
                                        <td className={"text-end"}>{product.name}</td>
                                        <td className={"text-end"}>$ {product.price}</td>
                                        <td className={"text-end"}>$ {product.price}*{product.cant}</td>
                                    </tr>
                                );
                            }
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                        <td className={"text-end"}>$ Total</td>
                    </tr>
                    </tbody>
                </Table>
            </Row>
            <Row className={"mt-2"}>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg"><i className="fa-solid fa-money-bill"></i> Finalizar
                        Compra</Button>
                    <Button variant="danger" size="lg" onClick={() => {
                        deleteProducts()
                    }}><i className="fa-solid fa-cart-shopping"></i> Cancelar Compra</Button>
                </div>
            </Row>
        </Container>
    )
}
export default ListaProd;