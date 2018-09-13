//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/bottom-button-duo.css';

function BottomButtonDuo(props) {
  return (
    <div className="miniBtnRow">
      <a 
        //id="btnRefreshMarkers"
        className={`btn btn-primary${props.firstBtnDisabled?" notAllowed":""}`}
        title={props.firtsBtnInfo || "Actualizar marcadores"}
        onClick={props.firstBtnHandleClick}
        disabled={props.firstBtnDisabled}
      >
        <i className={`glyphicon glyphicon-${props.firstBtnIcon || "refresh"}`}></i>
      </a>
      <a 
        //id="btnClearMarkers"
        className={`btn btn-danger${props.secondBtnDisabled?" notAllowed":""}`}
        title={props.secondBtnInfo || "Quitar marcadores"}//
        onClick={props.secondBtnHandleClick}
        disabled={props.secondBtnDisabled}
      >
        <i className={`glyphicon glyphicon-${props.secondBtnIcon || "remove"}`}></i>
      </a>
    </div>
  )
}

export default BottomButtonDuo;