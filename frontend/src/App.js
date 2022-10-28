import { Routes, Route } from 'react-router-dom'
import './App.css';
import ListaVentas from './components/ListaVentas'
import MenuNavegacion from './components/MenuNavegacion'
import Carrito from './components/Carrito'
import ListaProd from './components/ListaProd'
import ModificarProductos from './components/ModificarProducto';



function App() {
    return (
        <div className='container-fluid'>
            <MenuNavegacion />
            <div className='container p-4'>
                <Routes>
                    <Route path='/listaventas' element={<ListaVentas />} />
                    <Route path='/listproducts' element={<Carrito />} />
                    <Route path='/chart' element={<ListaProd />} />
                    <Route path='/prueba' element={<ModificarProductos />} />
                </Routes>
            </div>
        </div>
    )
}
export default App;
