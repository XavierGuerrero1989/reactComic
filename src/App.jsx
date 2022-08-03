import './App.scss'
import ItemListContainer from './componentes/ItemContainer/ItemListContainer'
import Nabvar from './componentes/nabvar/Nabvar'
import { TituloSeccion } from './componentes/TituloDeSeccion/TituloSeccion'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import { NotFound } from './componentes/404/NotFound';
import { TestEventos } from './componentes/testEventos/TestEventos';


function App() {


  return (

    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path='/' element={< ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={< ItemListContainer />} />
        <Route path='/comic/:idItem' element={<ItemDetailContainer/>} />
        <Route path="/testeventos" element={<TestEventos />} />
        <Route path='*' element={< NotFound />} />
        {/* <Route path='/comic/*' element={< NotFound />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
