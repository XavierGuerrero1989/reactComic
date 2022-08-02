import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const ItemDetail = (comicDetail) => {

  console.log(comicDetail.comicDetail.heroe)

  const [count, setCounter] = useState(1)
 
  return (

    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center'>
        <img src={comicDetail.comicDetail.imagen} className='col-md-6 detail__img' alt="imagen del comic" />
        <div className="col-md-3 text-center">
          <h2 className='detail__titulo'> {comicDetail.comicDetail.titulo}</h2>
          <h3 className='detail__subtitulo'>Heroe: {comicDetail.comicDetail.heroe}</h3>
          <h3 className='detail__subtitulo'>Descripcion: {comicDetail.comicDetail.descripcion}</h3>
          <h3 className='detail__subtitulo'>Stock: {comicDetail.comicDetail.stock}</h3>
          <h3 className='detail__subtitulo'>Precio: ${comicDetail.comicDetail.precio} </h3>
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
                  if (count < (comicDetail.comicDetail.stock)) {
                  setCounter(count + 1)
                  }
                  }
                }>
                +
                </Button>
              </InputGroup>
              <Button variant="success">Agregar al carrito</Button>
          </form> 
          </div>
          
        </div>
      </div>
    </div>

    
    )
}
