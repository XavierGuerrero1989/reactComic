import './App.scss'
import Hero from './componentes/HeroSection/Hero'
import ItemListContainer from './componentes/ItemContainer/ItemListContainer'
import Nabvar from './componentes/nabvar/Nabvar'
import { TituloSeccion } from './componentes/TituloDeSeccion/TituloSeccion'

function App() {


  return (
    <div className='container-fluid App'>
      <div className="row navbar">
        
          <Nabvar />
        
      </div>
      <div className="row Hero">
        
          <Hero />
        
      </div>

      <div className="row d-flex justify-content-center">
        
          < TituloSeccion />
        
      </div>

      <div className="row d-flex justify-content-center">
        
          < ItemListContainer />
        
      </div>
    </div>
  )
}

export default App
