import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';


const Item = ({ comic }) => { 

    

    
    const [count, setCounter] = useState(1) 

    
    
  return (
    

        <div className='col-md-3 d-flex justify-content-center stockCard'>

        

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={comic.imagen} className="stockImg"/>
                <Card.Body>
                <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{JSON.stringify(comic.titulo)}</Accordion.Header>
                            <Accordion.Body>
 
                                <ItemDetailContainer idDelComic={comic.id} />
                                
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>     

                    
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
                                                if (count < (comic.stock)) {
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
        
          
                
        </div>
    
    
  );
}

export default Item; 