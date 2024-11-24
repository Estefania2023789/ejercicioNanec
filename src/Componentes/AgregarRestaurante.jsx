
import React, { useState } from "react";
import axios from "axios";

const AgregarRestaurante = (props) => {

    const[datosFormRestaurante, setDatosFormRestaurante] = useState ({
        id: "",
        nombre: "",
        tipo: "",
        horario: "",
        imagen: ""
    });

    const {onAgregarRestaurante} = props;

    const handleAgregarRestaurante = (e) => {
        e.preventDefault();
        //console.log(e.target);
        const {name, value} = e.target;
        setDatosFormRestaurante({...datosFormRestaurante, [name]: value});
    }

    const handleSubmitRestaurante = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/restaurantes", datosFormRestaurante)
            .then(res => {
                console.log("Insercion existosa", res);
                onAgregarRestaurante(datosFormRestaurante);
            })
            .catch(err => {console.log("Insercion fallida", err)});
    }


    return (
        <div className="card">
            <h2>Agregar Restaurante</h2>
            <form onSubmit={handleSubmitRestaurante}>
                <div>
                    <label>Id: </label>
                    <input type="text" id="id" name="id" value={datosFormRestaurante.id} onChange={handleAgregarRestaurante}/>
                </div>
                <div>
                    <label>Nombre: </label>
                    <input type="text" id="nombre" name="nombre" value={datosFormRestaurante.nombre} onChange={handleAgregarRestaurante}/>
                </div>
                <label>Tipo de Comida: </label>
                <input type="text" id="tipo" name="tipo" value={datosFormRestaurante.tipo} onChange={handleAgregarRestaurante}/>
                <div>
                    <label>Horario: </label>
                    <input type="text" id="horario" name="horario" value={datosFormRestaurante.horario} onChange={handleAgregarRestaurante}/>
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="text" id="imagen" name="imagen" value={datosFormRestaurante.imagen} onChange={handleAgregarRestaurante}/>
                </div>
                <button>Agregar</button>
            </form>
                
        </div>
    );
}

export default AgregarRestaurante;