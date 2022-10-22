import {Routes, Route} from 'react-router-dom'
import './App.css';
import ListaVentas from './components/ListaVentas';
import MenuNavegacion from './components/MenuNavegacion';
import Carrito from './components/Carrito';
import ListaProd from "./components/ListaProd";

function App() {
    return (
        <div className=''>
            <MenuNavegacion/>
            <div className='container p-4'>
                <Routes>
                    <Route path='/' element={<ListaVentas/>}/>
                    <Route path='/listproducts' element={<Carrito/>}/>
                    <Route path='/chart' element={<ListaProd/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
