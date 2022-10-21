import React from 'react'

const ListaVentas = () => {
  return (
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Fecha</th>
      <th scope="col">idVenta</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>27/09/2022</td>
      <td>123</td>
      <td>$ 30</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>27/09/2022</td>
      <td>345</td>
      <td>$40</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>27/09/2022</td>
      <td>567</td>
      <td>$60</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td>Total</td>
      <td>$130</td>
    </tr>
  </tbody>
</table>
  )
}

export default ListaVentas