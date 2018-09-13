//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react'

import '../css/loading-container.css';

import Loader from './Loader';

const LoadingContainer = (props) => (
  <div className="row">
    <div className="loadingContainer col-md-12">
      <Loader color="black" size={64} />
    </div>
  </div>
);

export default LoadingContainer;