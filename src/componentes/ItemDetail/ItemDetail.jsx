import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const ItemDetail = (comicDetail) => {

  const [NuevoObjeto, setNuevoObjeto] = useState({})

  const [count, setCounter] = useState(1) 

  useEffect(()=>{

    setNuevoObjeto(comicDetail)

    console.log(NuevoObjeto)

  })

  return (

    <div>

      <Card.Text>
          Heroe: {NuevoObjeto.comicDetail.heroe}
        </Card.Text>
        <Card.Text>
          Descripcion: {NuevoObjeto.comicDetail.descripcion}
        </Card.Text>
        <Card.Text>
          Categoria: {NuevoObjeto.comicDetail.idCategoria}
        </Card.Text>
        <Card.Text>
          Stock: {NuevoObjeto.comicDetail.stock}
        </Card.Text>
        <Card.Text>
          Precio: {NuevoObjeto.comicDetail.precio}
      </Card.Text>

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
                                        <Form.Control
                                        type='number' value={count} />
                                        <Button variant="outline-secondary" id="button-addon2" onClick={
                                            function () {
                                                if (count < (NuevoObjeto.comicDetail.stock)) {
                                                    setCounter(count + 1)
                                                }
                                            }
                                            }>
                                        +
                                        </Button>
                            </InputGroup>
                            <Button variant="primary">Agregar al carrito</Button>
                    </form>

    </div>
  
    )
}
