//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import { render } from 'react-dom';
import "babel-polyfill";

import DisponibilidadPlazas from '../Containers/DisponibilidadPlazas';

const container = document.getElementById('plazasContainer');

render(<DisponibilidadPlazas />, container);
