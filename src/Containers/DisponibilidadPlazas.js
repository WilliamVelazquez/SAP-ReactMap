import React, {Component} from 'react';

import Select from 'react-select';
import GoogleMapsContainer from '../Containers/GoogleMapsContainer';

class DisponibilidadPlazas extends Component{
	state = {
		markers: [],
		entidades: [],
    entidadVal: null,
  };

  async componentDidMount() {
		console.log("initStateDisp",this.state);
		setTimeout(() => {
			this.setState({
				entidades: [{"cveEntidad":1,"nombreEntidad":"AGUASCALIENTES"},{"cveEntidad":2,"nombreEntidad":"BAJA CALIFORNIA"},{"cveEntidad":3,"nombreEntidad":"BAJA CALIFORNIA SUR"},{"cveEntidad":4,"nombreEntidad":"CAMPECHE"},{"cveEntidad":7,"nombreEntidad":"CHIAPAS"},{"cveEntidad":8,"nombreEntidad":"CHIHUAHUA"},{"cveEntidad":9,"nombreEntidad":"CIUDAD DE MEXICO"},{"cveEntidad":5,"nombreEntidad":"COAHUILA"},{"cveEntidad":6,"nombreEntidad":"COLIMA"},{"cveEntidad":10,"nombreEntidad":"DURANGO"},{"cveEntidad":15,"nombreEntidad":"ESTADO DE MEXICO"},{"cveEntidad":34,"nombreEntidad":"EXTRANJERO"},{"cveEntidad":11,"nombreEntidad":"GUANAJUATO"},{"cveEntidad":12,"nombreEntidad":"GUERRERO"},{"cveEntidad":13,"nombreEntidad":"HIDALGO"},{"cveEntidad":14,"nombreEntidad":"JALISCO"},{"cveEntidad":16,"nombreEntidad":"MICHOACÁN"},{"cveEntidad":17,"nombreEntidad":"MORELOS"},{"cveEntidad":33,"nombreEntidad":"NATURALIZADO"},{"cveEntidad":18,"nombreEntidad":"NAYARIT"},{"cveEntidad":19,"nombreEntidad":"NUEVO LEON"},{"cveEntidad":20,"nombreEntidad":"OAXACA"},{"cveEntidad":21,"nombreEntidad":"PUEBLA"},{"cveEntidad":22,"nombreEntidad":"QUERETARO"},{"cveEntidad":23,"nombreEntidad":"QUINTANA ROO"},{"cveEntidad":24,"nombreEntidad":"SAN LUIS POTOSI"},{"cveEntidad":25,"nombreEntidad":"SINALOA"},{"cveEntidad":26,"nombreEntidad":"SONORA"},{"cveEntidad":27,"nombreEntidad":"TABASCO"},{"cveEntidad":28,"nombreEntidad":"TAMAULIPAS"},{"cveEntidad":29,"nombreEntidad":"TLAXCALA"},{"cveEntidad":30,"nombreEntidad":"VERACRUZ"},{"cveEntidad":31,"nombreEntidad":"YUCATAN"},{"cveEntidad":32,"nombreEntidad":"ZACATECAS"}]
			});
		}, 2000);
  }

  handleChangeEntidad = (entidadVal) => {
  	console.log("entidadVal-->",entidadVal)
    this.setState({ entidadVal });
  }

  searchMarkers = () => {
    this.setState({
      markers: [
        { 
          id: 0,
          title: 'CDMX',
          lat: 19.4326077, 
          lng: -99.13320799999997,
          infoTitle: 'Centro de Mexico',
          infoPhone: '5355-5555',
          infoTotal: 120,
          infoAvailable: 50,
          infoUnavailable: 70
        },
        { 
          id: 1,
          title: 'CCT1',
          lat: 19.5326077, 
          lng: -99.23320799999997,
          infoTitle: 'CCT1',
          infoPhone: 'Telefono1',
          infoTotal: 120,
          infoAvailable: 50,
          infoUnavailable: 70
        },
        { 
          id: 2,
          title: 'CCT2',
          lat: 19.6626077, 
          lng: -99.19920799999997,
          infoTitle: 'CCT2',
          infoPhone: 'Telefono2',
          infoTotal: 10,
          infoAvailable: 6,
          infoUnavailable: 4
        },
        { 
          id: 3,
          title: 'CCT3',
          lat: 19.3126077, 
          lng: -99.01320799999997,
          infoTitle: 'CCT3',
          infoPhone: 'Telefono3',
          infoTotal: 50,
          infoAvailable: 26,
          infoUnavailable: 24
        },
      ]
    });
    //console.log("Ubicando Marcadores-->", this.state);
  }

	render(){
		return(
			<div>
				<section id="formFiltros">
					<div className="row">
			      <div className="col-md-12">
			      	<h4>Selección de filtros para mostrar Plazas Disponibles</h4>
			      </div>

			      <div className="formSAP">
			      	<div>
				      	<label>
		              Entidad:
		            </label>
								<Select 
									ref="entidadSelect"
									options={this.state.entidades}
									simpleValue
									clearable
									name="select-entidad"
									value={this.state.entidadVal}
									onChange={this.handleChangeEntidad}
									searchable
									labelKey="nombreEntidad"
									valueKey="cveEntidad"
									noResultsText="Sin elementos encontrados"
									clearValueText="Limpiar"
									placeholder="Selecciona una Entidad Federativa..."
									searchPromptText="Escribe para buscar"
								/>
			      	</div>

			      	<a 
			      		className="btn btn-primary"
			      		onClick={this.searchMarkers}
			      	>
		            Ubicar Plazas 
		            <i className="glyphicon glyphicon-map-marker"></i>
		          </a>

			      </div>
			    </div>
			  </section>

				<div className="row">
		      <div className="col-md-12" style={{height: 400, marginBottom: 25}}>
						<GoogleMapsContainer markers={this.state.markers}/>
		      </div>
		    </div>
	    </div>
		)
	}
};

export default DisponibilidadPlazas;