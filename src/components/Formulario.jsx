import React from 'react';
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useState } from "react"

const Formulario = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [email,setEmail] = useState("")
    const [documento,setDocumento] = useState("")
    const [dato,setDato] = useState({})
    const [datosUsuario, setDatosUsuario] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre.length !== 0 && apellido.length !== 0 && email.length !== 0 && documento.length !== 0 ){
            setDato({nombre:nombre, apellido:apellido, email:email, documento:documento})
            setDatosUsuario([...datosUsuario, dato]);
            setNombre("");
            setApellido("");
            setEmail("");
            setDocumento("");
            alert("Datos cargados")
        } else{
            alert("no fue posible cargar los datos, por favor complete todos los campos")
        }
    };


    return (
        <section className='p-4 border border-primary rounded'>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="my-3" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            // required
                            type="text"
                            placeholder="ingrese su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="my-3" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            // required
                            type="text"
                            placeholder="ingrese su apellido"
                            onChange={(e) => setApellido(e.target.value)}
                            value={apellido}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="my-3" controlId="validationCustom01">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            // required
                            type="email"
                            placeholder="ingrese su e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="my-3" controlId="validationCustom02">
                        <Form.Label>Número de Documento</Form.Label>
                        <Form.Control
                            // required
                            type="number"
                            placeholder="Ingrese su número de documento"
                            onChange={(e) => setDocumento(e.target.value)}
                            value={documento}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar Formulario</Button>
            </Form>
        </section>
    );
};

export default Formulario;