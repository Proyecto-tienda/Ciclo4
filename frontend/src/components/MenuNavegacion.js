import React from 'react'
import { Link } from 'react-router-dom'

export const MenuNavegacion = () => {
  return (
    <nav className="bg-light nav-pills nav-justified">
        <ul className='nav justify-content-center '>
            <li>
            <ink className="nav-link" to="/"> Lista Productos </ink>
            </li>
            <li>
            <Link className='nav-link' to="/"> Modificar Productos </Link>
            </li>
            <li>
            <Link className='nav-link' to="/"> Lista Ventas </Link>
            </li>
        </ul>
    </nav>
  )
}

export default MenuNavegacion
