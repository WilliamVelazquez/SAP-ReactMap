//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/alert.css';

function AlertText(props) {
  return (
    <div className="row alert alert-danger alertWarning">
      <strong>{ props.title || "¡Sin Resultados!" }</strong>
      <br />
      { props.msg || "No se encontraron centros de trabajo con plazas de acuerdo a la información proporcionada" }
      { props.children }
    </div>
  )
}

export default AlertText;