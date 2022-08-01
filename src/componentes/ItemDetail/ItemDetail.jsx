import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const ItemDetail = (comicDetail) => {

  console.log(comicDetail)

  const [count, setCounter] = useState(1) 

  return (

    <div>

      <Card.Text>
          Heroe: {comicDetail.comicDetail.heroe}
        </Card.Text>
        <Card.Text>
          Descripcion: {comicDetail.comicDetail.descripcion}
        </Card.Text>
        <Card.Text>
          Categoria: {comicDetail.comicDetail.idCategoria}
        </Card.Text>
        <Card.Text>
          Stock: {comicDetail.comicDetail.stock}
        </Card.Text>
        <Card.Text>
          Precio: {comicDetail.comicDetail.precio}
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
                                                if (count < (comicDetail.stock)) {
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
