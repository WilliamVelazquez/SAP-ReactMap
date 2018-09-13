//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/button-row.css';

function ButtonRow(props) {
  return (
    <div className="btnRow">
      <a 
        //id="btnSearchPlazas"
        className={`btn btn-primary btn-row${props.btnDisabled?" notAllowed":""}`}
        title={props.btnInfo || "Ubicar plazas"}
        onClick={props.btnHandleClick}
        disabled={props.btnDisabled}
      >
        { props.btnText || "Ubicar Plazas "}
        <i className={`glyphicon glyphicon-${props.btnIcon || "map-marker"}`}></i>
      </a>
    </div>
  )
}

export default ButtonRow;