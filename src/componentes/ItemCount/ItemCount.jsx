import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const ItemCount = ( {stockDisponible, onclick }) => {

    console.log(onclick)
    const [count, setCounter] = useState(1)

  return (
    <div className='col-md-12'>
            <form>
                <InputGroup className="mb-3" >
                <Button variant="outline-secondary" id="button-addon" onClick={
                function () {
                  if (count > 1) {
                    setCounter(count - 1)
                  }
                }
                }>
                -
                </Button>
                <Form.Control type='number' value={count} />
                <Button variant="outline-secondary" id="button-addon2" onClick={
                  function () {
                  if (count < (stockDisponible.stockDisponible)) {
                  setCounter(count + 1)
                  }
                  }
                }>
                +
                </Button>
                </InputGroup>
                <Button variant="success" onClick={onclick}>Agregar al carrito</Button>
            </form> 
    </div>
  )
}
