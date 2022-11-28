import '/src/App.css'
import React from 'react'
import { Col, Button, Row, Container, Card, Form, Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import EncabezadoGeneral from './layout/EncabezadoGeneral'
import logo from '/images/logoNaranja.png'

function ListadoOrdenes(){
    useEffect(()=>{document.title = "Listado Ordenes"})
    return(
        <>
            <EncabezadoGeneral/>
            <div className='mt-5'>
                <Container id="containerListadoOrdenes">
                    <Card className='shadow'>
                    <Card.Body >
                        <Row>
                            <Col className='mb-3' md="2">
                                <img src={logo} width="100"/>
                            </Col>
                            <Col className='mb-3'>
                                <Container>
                                    <h3>Listado Ordenes</h3>
                                </Container>
                            </Col>  
                            <Col className='mb-3' md="2">
                                <br></br>
                                <Button variant="warning" type="submit" href="/crear_ordenes">Crear Orden</Button>
                            </Col>                          
                        </Row>
                        <Table responsive striped bordered hover variant="light">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Ciudad Entrega</th>
                                <th>Direccion Entrega</th>
                                <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>2022-11-18</td>
                                <td>Bogotá</td>
                                <td>Calle 1 # 1 - 1</td>
                                <td>Cumplido</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>2022-11-18</td>
                                <td>Bogotá</td>
                                <td>Calle 1 # 1 - 1</td>
                                <td>Cancelado</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>2022-11-18</td>
                                <td>Bogotá</td>
                                <td>Calle 1 # 1 - 1</td>
                                <td>Guardado</td>
                                </tr>
                                <tr>
                                <td>4</td>
                                <td>2022-11-18</td>
                                <td>Bogotá</td>
                                <td>Calle 1 # 1 - 1</td>
                                <td>Cancelado</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default ListadoOrdenes;