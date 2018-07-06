import React from 'react';
import { render } from 'react-dom';
import "babel-polyfill";

// import GoogleMapsContainer from '../Containers/GoogleMapsContainer';
import DisponibilidadPlazas from '../Containers/DisponibilidadPlazas';
// var data={
// 	categoriaValue: "",
// 	entidadValue: "10",
// 	funcionValue:	"1",
// 	modalidadValue: "15",
// 	nivelValue: "2",
// 	puestoValue: "1",
// 	servicioValue: "1",
// 	sostenimientoValue:	"",
// 	tipoEvaluacionValue: "46"
// };

const container = document.getElementById('plazasContainer');

// render(<GoogleMapsContainer parameters={data}/>, container);
render(<DisponibilidadPlazas />, container);
