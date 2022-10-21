import {Routes, Route} from 'react-router-dom'
import './App.css';
import ListaVentas from './components/ListaVentas';
import MenuNavegacion from './components/MenuNavegacion';
import Carrito from './components/Carrito';

function App() {
    return (
        <div className=''>
            <MenuNavegacion/>
            <div className='container p-4'>
                <Routes>
                    <Route path='/' element={<ListaVentas/>}/>
                    <Route path='/carrito' element={<Carrito/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
