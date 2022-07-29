import React from 'react'
import Card from 'react-bootstrap/Card';

export const ItemDetail = (comicDetail) => {

    console.log(comicDetail)

  return (

    <div>
       <Card.Text>
          Heroe: {comicDetail.comicDetail.heroe}
        </Card.Text>
        <Card.Text>
          Descripcion: {comicDetail.comicDetail.descripcion}
        </Card.Text>
        <Card.Text>
          Categoria: {comicDetail.comicDetail.categoria}
        </Card.Text>
        <Card.Text>
          Stock: {comicDetail.comicDetail.stock}
        </Card.Text>
        <Card.Text>
          Precio: {comicDetail.comicDetail.precio}
        </Card.Text>


    </div>
  
    )
}
