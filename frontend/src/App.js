import {Routes,Route} from 'react-router-dom'
import './App.css';
import ListaVentas from './components/ListaVentas';
import MenuNavegacion from './components/MenuNavegacion'

function App() {
  return (
    <div className =''>
        <MenuNavegacion/>
        <div className='container p-4'>
            <Routes>
            <Route path='/' element= {<ListaVentas/>}/>
            </Routes>
        </div>

    </div>
    )
}
export default App;
