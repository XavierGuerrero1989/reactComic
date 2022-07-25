import React from 'react'
// import { getStock } from '../stock/stock'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';


const Product = ({ titulo, heroe, imagen, stock, precio, descripcion }) => { 

    

    

    
    const [count, setCounter] = useState(1) 
  

    

  return (
    


        <div className='col-md-3 d-flex justify-content-center stockCard'>


                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} className="stockImg"/>
                <Card.Body>
                    <Card.Title> { titulo }  </Card.Title>
                    <Card.Text>
                    Heroe: { heroe }
                    </Card.Text>
                    <Card.Text>
                    { descripcion }
                    </Card.Text>
                    <Card.Text>
                    Stock Disponible: { stock }
                    </Card.Text>
                    <Card.Text>
                    Precio: { precio }
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
                                                if (count < stock) {
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

export default Product; 