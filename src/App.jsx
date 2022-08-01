import './App.scss'
import ItemListContainer from './componentes/ItemContainer/ItemListContainer'
import Nabvar from './componentes/nabvar/Nabvar'
import { TituloSeccion } from './componentes/TituloDeSeccion/TituloSeccion'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';


function App() {


  return (

    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path='/' element={< ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={< ItemListContainer />} />
        <Route path='/comic/:idItem' element={<ItemDetailContainer/>} />
        {/* <Route path='*' element={< ERROR 404 />} /> */}
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
