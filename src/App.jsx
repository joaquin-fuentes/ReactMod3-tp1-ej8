
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Footer from './components/Footer';
import { Container } from "react-bootstrap"
import Formulario from './components/Formulario';

const App = () => {
  return (
    <>
      <header>
        <h1 className='text-center bg-dark text-light p-3 m-0'>Formulario</h1>
      </header>
      <Container className='mainPage d-flex justify-content-center align-items-center'>
        <Formulario></Formulario>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;