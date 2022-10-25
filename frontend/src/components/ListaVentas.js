import React, {useState} from 'react'
import {Table, Button, Row, Col, Container, Image} from "react-bootstrap";
import ventasJson from "./data/ventas.json";

const ListaVentas = () => {
    return (
        <Container>
            <Row>
                <Table variant={"hover"} className={"table-bordered"}>
                    <thead className={"bg-dark text-light text-center"}>
                    <tr>
                        <th>Fecha</th>
                        <th>Id Venta</th>
                        <th>Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        ventasJson.map((venta) => {
                                let {fecha, idCliente, idVenta, valor, confirmado, detalleCompra} = venta;
                                return (
                                    <tr>
                                        <td className={"text-end"}>{fecha}</td>
                                        <td className={"text-end"}>{idVenta}</td>
                                        <td className={"text-end"}>$ {valor}</td>
                                    </tr>
                                );
                            }
                        )
                    }
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td className={"text-end"}>$ Total</td>
                    </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default ListaVentas