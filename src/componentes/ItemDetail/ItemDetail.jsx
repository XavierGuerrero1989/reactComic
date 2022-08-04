import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = (comicDetail) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false)

  const handleOnClick = () => {
    setIrAlCarrito(true);
  }

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
          <div>
          {
            irAlCarrito
            ? <Link to='/cart'><Button variant="success">Finalizar la Compra</Button></Link>
            : < ItemCount stockDisponible={comicDetail.comicDetail.stock} onclickevent={handleOnClick} />
          }

          </div>

        </div>
      </div>
    </div>

    
    )
}
