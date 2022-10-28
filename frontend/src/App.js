import { Routes, Route } from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
import ListaVentas from './components/ListaVentas';
import MenuNavegacion from './components/MenuNavegacion';
import Carrito from './components/Carrito';
import ListaProd from "./components/ListaProd";
import MenuPrincipal from "./components/MenuPrincipal";
=======
import ListaVentas from './components/ListaVentas'
import MenuNavegacion from './components/MenuNavegacion'
import ListaProd from './components/ListaProd'
import Carrito from './components/Carrito'
import ModificarProductos from './components/ModificarProducto';
import ListaProdAdmin from "./components/ListaProdAdmin";


>>>>>>> robin

function App() {
    return (
        <div className='container-fluid'>
<<<<<<< HEAD
            <MenuPrincipal/>
=======
            <MenuNavegacion />
>>>>>>> robin
            <div className='container p-4'>
                <Routes>
                    <Route path='/listaventas' element={<ListaVentas />} />
                    <Route path='/listproducts' element={<ListaProd />} />
                    <Route path='/listproductsadmin' element={<ListaProdAdmin />} />
                    <Route path='/chart' element={<Carrito />} />
                    <Route path='/prueba' element={<ModificarProductos />} />
                </Routes>
            </div>
        </div>
    )
}
export default App;
