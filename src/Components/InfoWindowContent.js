//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/info-window-content.css';

function InfoWindowContent(props) {
  return (
    <div className="infoWindow">
      <br />
      <h4 className="title">{ props.title }</h4>
      <div className="disponibilidadInfo">
        <div className="availableInfo">
          <strong>{ props.firstNumber }</strong>
          <p>{ props.firstText || "Disponibles" }</p>
        </div>
        <div className="unavailableInfo">
          <strong>{ props.secondNumber }</strong>
          <p>{ props.secondText || "Asignadas" }</p>
        </div>
      </div>
    </div>
  )
}

export default InfoWindowContent;