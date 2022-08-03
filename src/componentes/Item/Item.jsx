import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from 'react';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import { Link } from 'react-router-dom';


const Item = ({ comic }) => { 

    

    let ruta = '/comic/' + comic.id
    
    const [idHeredado, setidHeredado] = useState()


    useEffect(() => {
        setidHeredado(comic.id)
    }, [])
    
  return (
    

        <div className='col-md-3 d-flex justify-content-center stockCard'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={comic.imagen} className="stockImg"/>
                <Card.Body>
                <Card.Text>
                    {JSON.stringify(comic.titulo)}
                </Card.Text>
                    <Link to={ ruta } element={< ItemDetailContainer idDelComic= {idHeredado} />}>
                        <Button variant="success">
                            Ver detalles del Producto
                        </Button>
                    </Link>
                </Card.Body>
                </Card>         
        </div>
    
    
  );
}

export default Item; 