//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/accordion-panel.css';

function AccordionPanel(props) {
  /*const {
    toggleCaret,
    openedPanel
  } = props;*/

  return (
    <section id="formFiltros" className="panel-section">
      <div className="row">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a 
                  id="collapseOneBtn"
                  role="button" 
                  data-toggle="collapse" 
                  data-parent="#accordion" 
                  href="#collapseOne" 
                  aria-expanded="true" 
                  aria-controls="collapseOne"
                  onClick={props.toggleCaret}
                >
                  {props.title}
                  <i className={`panel-icon glyphicon glyphicon-${props.openedPanel?"triangle-top":"triangle-bottom"}`}></i>
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                { props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccordionPanel;