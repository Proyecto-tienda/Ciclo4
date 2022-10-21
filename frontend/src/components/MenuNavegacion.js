import React from 'react'
import { Link } from 'react-router-dom'

export const MenuNavegacion = () => {
  return (
    <nav className="bg-light nav-pills nav-justified">
        <div className={"container-fluid p-2"}>
            <ul className='nav justify-content-center '>
                <li>
                    <Link className="nav-link" to="/"><i className="fa-solid fa-shop"></i> Lista Productos </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/"><i className="fa-solid fa-sliders"></i> Modificar Productos </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/"><i className="fa-solid fa-list"></i> Lista Ventas </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default MenuNavegacion
