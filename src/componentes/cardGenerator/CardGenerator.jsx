import React from 'react'
// import { getStock } from '../stock/stock'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import Super1 from '../../imgs/superman1.jpg';
import Super2 from '../../imgs/superman75.jpg';
import Flash1 from '../../imgs/flashpoint.jpg';
import Flash2 from '../../imgs/flash324.jpg';
import Aquaman1 from '../../imgs/Aquaman_de_Peter_David.jpg';
import Aquaman2 from '../../imgs/dc-aquaman-29.jpg';
import Thor1 from '../../imgs/thor274.jpg';
import Thor2 from '../../imgs/thor297.jpg';
import Iron1 from '../../imgs/iron_man126.jpg';
import Iron2 from '../../imgs/ironmam598.jpg';
import Capi1 from '../../imgs/calivinglegend1.jpg';
import Capi2 from '../../imgs/La-búsqueda-de-la-Gema-de-Sangre-portada.jpg';

function CardGenerator() {

    const comics = [
        {
            "id":"1",
            "titulo":"Action Comics 1",
            "heroe":"Super Man",
            "descripcion":"Primera aparición de Super Man",
            "imagen": Super1 ,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"2",
            "titulo":"Super Man 75: La muerte de Super Man",
            "heroe":"Super Man",
            "descripcion":"Volumen donde se presenta la muerte de Super Man",
            "imagen":Super2,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"3",
            "titulo":"Flashpoint",
            "heroe":"Flash",
            "descripcion":"Evento integral del DC universe, protagonizado por Flash",
            "imagen":Flash1,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"4",
            "titulo":"Flash 324: La muerte de Reverse Flash",
            "heroe":"Flash",
            "descripcion":"Episodio donde Flash elimina a Reverse Flash accidentalmente",
            "imagen":Flash2,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"5",
            "titulo":"Aquaman de Peter David",
            "heroe":"Aquaman",
            "descripcion":"Volumen recopilatorio del Aquaman de Peter David",
            "imagen":Aquaman1,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"6",
            "titulo":"Aquaman 29",
            "heroe":"Aquaman",
            "descripcion":"Episodio 29 de la serie original de Aquaman",
            "imagen":Aquaman2,
            "categoria":"DC",
            "stock":"10"
        },
        {
            "id":"7",
            "titulo":"Thor 274",
            "heroe":"Thor",
            "descripcion":"Thor 274",
            "imagen":Thor1,
            "categoria":"Marvel",
            "stock":"10"
        },
        {
            "id":"8",
            "titulo":"Thor 297",
            "heroe":"Thor",
            "descripcion":"Thor 297",
            "imagen":Thor2,
            "categoria":"Marvel",
            "stock":"10"
        },
        {
            "id":"9",
            "titulo":"The Invincible Iron Man 126",
            "heroe":"Iron Man",
            "descripcion":"The Invincible Iron Man 126",
            "imagen":Iron1,
            "categoria":"Marvel",
            "stock":"10"
        },
        {
            "id":"10",
            "titulo":"The Invincible Iron Man 598",
            "heroe":"Iron Man",
            "descripcion":"The Invincible Iron Man 598",
            "imagen":Iron2,
            "categoria":"Marvel",
            "stock":"10"
        },
        {
            "id":"11",
            "titulo":"Captain America Living Leyend 1",
            "heroe":"Capitan America",
            "descripcion":"Captain America Living Leyend 1",
            "imagen":Capi1,
            "categoria":"Marvel",
            "stock":"10"
        },
        {
            "id":"12",
            "titulo":"Captain America: La busqueda de la gema de sangre",
            "heroe":"Capitan America",
            "descripcion":"Captain America: La busqueda de la gema de sangre",
            "imagen":Capi2,
            "categoria":"Marvel",
            "stock":"10"
        }
    
    ]

    
        const [count, setCounter] = useState(1)
  

    

  return (
    


        <div className='row justify-content-center'>
            {comics.map((comic) => (

                

                <Card style={{ width: '18rem' }} className='col-md-3 stockCard'>
                <Card.Img variant="top" src={comic.imagen} className="stockImg"/>
                <Card.Body>
                    <Card.Title> { comic.titulo }  </Card.Title>
                    <Card.Text>
                    { comic.descripcion }
                    </Card.Text>
                    <Card.Text>
                    Stock Disponible: { comic.stock }
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
                                                if (count < comic.stock) {
                                                    setCounter(count + 1)
                                                }
                                            }
                                            }>
                                        +
                                        </Button>
                            </InputGroup>
                            <Button variant="primary">Agregar al carrito</Button>
                    </form>
                </Card.Body>
                </Card>
        
            ))}
                
        </div>
    
    
  );
}

export default CardGenerator; 