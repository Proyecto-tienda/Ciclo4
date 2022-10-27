import {Routes, Route} from 'react-router-dom'
import './App.css';
import ListaVentas from './components/ListaVentas';
import MenuNavegacion from './components/MenuNavegacion';
import Carrito from './components/Carrito';
import ListaProd from "./components/ListaProd";
import MenuPrincipal from "./components/MenuPrincipal";

function App() {
    return (
        <div className='container-fluid'>
            <MenuPrincipal/>
            <div className='container p-4'>
                <Routes>
                    <Route path='/listaventas' element={<ListaVentas/>}/>
                    <Route path='/listproducts' element={<Carrito/>}/>
                    <Route path='/chart' element={<ListaProd/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
