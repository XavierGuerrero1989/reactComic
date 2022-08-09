import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export const ItemCount = ({onclickevent, stockDisponible, onAdd}) => {

    

    const [count, setCounter] = useState(1)

    function restaUnidades () {
      if (count > 1) {
        setCounter(count - 1)
      }
    }

    function sumaUnidades () {
      if (count < (stockDisponible)) {
        setCounter(count + 1)
      }
    }
    

  return (
    <div className='col-md-12'>
            <form>
                <InputGroup className="mb-3" >
                <Button variant="outline-secondary" id="button-addon" onClick={restaUnidades}>
                -
                </Button>
                <Form.Control type='number' value={count} />
                <Button variant="outline-secondary" id="button-addon2" onClick={sumaUnidades}>
                +
                </Button>
                </InputGroup>
                <Button variant="success" disabled={stockDisponible <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </form> 
    </div>
  )
}
