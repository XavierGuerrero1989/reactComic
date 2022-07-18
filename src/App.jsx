import './App.scss'
import Hero from './componentes/HeroSection/Hero'
import ItemCtn from './componentes/ItemCtn/ItemCtn'
import Nabvar from './componentes/nabvar/Nabvar'

function App() {


  return (
    <div className='container-fluid App'>
      <div className="row navbar">
        
          <Nabvar />
        
      </div>
      <div className="row Hero">
        
          <Hero />
        
      </div>

      <div className="row itemListCtn">
        
          < ItemCtn />
        
      </div>
    </div>
  )
}

export default App
