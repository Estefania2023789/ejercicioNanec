//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ItemRestaurante from './Componentes/ItemRestaurante';
import axios from 'axios';
import AgregarRestaurante from './Componentes/AgregarRestaurante';

//Codigo Principal
function App () {
  /*const agregarRestaurante = () => {
    setRestaurantes(prevState => [...prevState, { nombre: "Nuevo Restaurante", tipo: "Tipo de comida", horario: "00:00 - 00:00", imagen: "" }]);
  };*/
  //restaurantes es la variable de estado y set restaurante es la funcion cuando se actuliza el estado
  /*const [restaurantes, setRestaurantes] = useState([
    { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", imagen:"" },
    { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", imagen:"" },
    { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", imagen: ""},
    { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", imagen: ""}
  ]);*/

  const [restaurantes, setRestaurantes] = useState([]);

  const agregarRestaurante = (nuevoRestaurante) =>{
    setRestaurantes((prevRestaurante) =>
    [...prevRestaurante, nuevoRestaurante])
  };

  const cargarRestaurantes = () => {
    axios.get("http://localhost:3001/restaurantes")
      .then(res => {
        console.log("Respuesta Exitosa: ", res);
        //Se asigna la lista a la variable de estado
        setRestaurantes(res.data);
        
      })
      .catch(err => {
        console.log("Respuesta Fallida: " + err);
      })
  };

  useEffect(cargarRestaurantes, []);

  return (
    <div className="App">
      <h1>Bienvenidos a ñanEC</h1>
      {restaurantes.map((rest, index) => (
        <ItemRestaurante 
          key={index} 
          nombre={rest.nombre} 
          tipo={rest.tipo} 
          horario={rest.horario} 
          imagen={rest.imagen}>

        </ItemRestaurante>
        ))}
      {/*<button onClick={agregarRestaurante}>Agregar</button>*/}
      <AgregarRestaurante 
        onAgregarRestaurante = {agregarRestaurante}>
      </AgregarRestaurante>
    </div>
  );

}
export default App;
