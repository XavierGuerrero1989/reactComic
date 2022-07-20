import React from 'react'
import CardGenerator from '../cardGenerator/CardGenerator'

const ItemCtn = () => {
  return (
  <div>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <h1>Elije los comics que mas te gusten dentro de nuestro gran catalogo</h1>
      </div>
    </div>
    
    < CardGenerator />
    
  </div>
    
    
    
  )
}

export default ItemCtn