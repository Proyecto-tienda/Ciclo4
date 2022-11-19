import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
            <nav className="navbar navbar-expand-lg" id="sidebar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Dashboard"><i className="fa fa-tachometer"></i> Administración</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown"><i
                            className="fa fa-product-hunt"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/ProductList"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li >

                    <li className="nav-item">
                        <Link to="/orderList"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>

    )
}

export default Sidebar