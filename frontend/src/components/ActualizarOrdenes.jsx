import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import EncabezadoGeneral from './layout/EncabezadoGeneral';
import logo from '/images/logoNaranja.png'

function ActualizarOrdenes() {
    useEffect(()=>{document.title = "Actualizar Ordenes"})
  const [validated, setValidated] = useState(false);
  const [ruta, setRuta] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setRuta("/listado_ordenes")
  };

  return (
    <>
        <EncabezadoGeneral/>
        <Container>
            <Row className="d-flex justify-content-center align-items-center mt-4" id="containerRegistro">
                <Col lg={14}>
                    <Card className="shadow" >
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Row>
                            <Col className='mb-3' md="3">
                                <img src={logo} width="100"/>
                            </Col>
                            <Col className='mb-3'>
                                <Container>
                                    <h3>Actualización de Orden</h3>
                                </Container>
                            </Col>  
                            <Col className='mb-3' md="3">
                                <br></br>
                                <Button variant="warning" type="submit" href={ruta}>Actualizar Orden</Button>
                            </Col>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="Ingresar la fecha en formato x"    //Definir formato                             
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control
                                required
                                type="time"
                                placeholder="Ingresar hora en formato militar"                                
                            />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Col className='mb-3' md="3">
                               
                            </Col>
                            <Col className='mb-3'>
                                <Container>
                                    <Form.Group md="4"  controlId="validationCustom01">
                                    <Form.Label>Estado del pedido</Form.Label>
                                    <Form.Select md="2" aria-label="Default select example">
                                        <option value="Guardado">Guardado</option>
                                        <option value="Cancelado">Cancelado</option>
                                        <option value="Cumplido">Cumplido</option>
                                    </Form.Select>
                                    </Form.Group>
                                </Container>
                            </Col>  
                            <Col className='mb-3' md="3">
                                
                            </Col>
                            
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Ancho</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Ancho"
                                aria-label="Ancho"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Largo</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Largo"
                                aria-label="Largo"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Alto</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Alto"
                                aria-label="Alto"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">metros</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                            <Form.Label>Peso</Form.Label>
                            <InputGroup>
                                <Form.Control
                                required
                                placeholder="Peso"
                                aria-label="Peso"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Kg</InputGroup.Text>
                            </InputGroup>
                            </Form.Group>
                        </Row>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de recogida" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad Recogida</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de recogida" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Nombre destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del destinatario" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Cedula/Nit Destinatario</Form.Label>
                            <Form.Control type="text" placeholder="Identificacion del destinatario" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Dirección Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de entrega" required />                            
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Ciudad Entrega</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad de entrega" required />
                            </Form.Group>
                        </Row>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default ActualizarOrdenes