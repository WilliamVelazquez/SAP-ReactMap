//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/version.css';

function ApplicationVersion(props) {
  return (
    <div className="row">
      <div className="text-center version-actual">
        <span>
          { props.currentVersion }
        </span>
      </div>
      {props.children}
    </div>
  )
}

export default ApplicationVersion;