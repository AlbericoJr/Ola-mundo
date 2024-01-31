import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import SobreMim from './Paginas/SobreMim'
import Menu from './Componentes/Menu'

function App() {

  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App