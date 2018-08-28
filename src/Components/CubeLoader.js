//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/cargando.css';

function CubeLoader(props) {
  return (
    <div className="cargando">
      <div>
        <div className="cssload-container">
          <div className="cssload-thecube">
            <div className="cssload-cube cssload-c1"></div>
            <div className="cssload-cube cssload-c2"></div>
            <div className="cssload-cube cssload-c4"></div>
            <div className="cssload-cube cssload-c3"></div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default CubeLoader;