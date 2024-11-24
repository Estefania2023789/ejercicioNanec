import React from 'react';

const ItemRestaurante =  ({nombre, tipo, horario, imagen}) => {
    
        //const{nombre, tipo, horario, imagen}=props;
        return (
            <div className="card">
                <h3>{nombre}</h3>
                <p>{"Tipo de comida: " + tipo}</p>
                <p>{"Horario: " + horario}</p>
                <img src={imagen} alt="" />
            </div>
        );
}

export default ItemRestaurante;
