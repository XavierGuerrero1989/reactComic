import './App.scss'
import Hero from './componentes/HeroSection/Hero'
import ItemListContainer from './componentes/ItemContainer/ItemListContainer'
import Nabvar from './componentes/nabvar/Nabvar'
import { TituloSeccion } from './componentes/TituloDeSeccion/TituloSeccion'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <BrowserRouter>

        <div className='container-fluid App'>
          <div className="row navbar">
              <Nabvar />
          </div>
          <div className="row Hero">
              <Hero />
          </div>
        </div>
        <Routes>
          <Route path='/' element={< ItemListContainer />} />
          {/* <Route path='*' element={< ERROR 404 />} /> */}
          
        </Routes>

          <div className="row d-flex justify-content-center">
            
              < TituloSeccion />
            
          </div>

          <div className="row d-flex justify-content-center">
            
              < ItemListContainer />
            
          </div>
        
    
    </BrowserRouter>
  )
}

export default App
