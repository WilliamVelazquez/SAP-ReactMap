//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, { Component } from 'react';

import '../css/filter-form.css';

import YoutubeButton from '../Components/YoutubeButton';
import AccordionPanel from '../Components/AccordionPanel';
import FilterForm from '../Components/FilterForm';

import AlertText from '../Components/AlertText';
import SideNavBar from '../Components/SideNavBar';
import CubeLoader from '../Components/CubeLoader';
import BottomButtonDuo from '../Components/BottomButtonDuo';
import ApplicationVersion from '../Components/ApplicationVersion';

import GoogleMapsContainer from './GoogleMapsContainer';

class DisponibilidadPlazas extends Component{
	state = {
		loading: false,
		currentVersion: "",
		openedPanel: true, 
		alertActive: false,
		markers: [],
		entidades: [],
    entidadVal: null,
    nivelesEducativos: [],
    nivelEducativoVal: null,
    serviciosEducativos: [],//Básica
    servicioEducativoVal: null,//Básica
    modalidades: [],//Básica
    modalidadVal: null,//Básica
    puestos: [],
    puestoVal: null,
    funciones: [],
    funcionVal: null,
    categorias: [],//Media Superior
    categoriaVal: null,//Media Superior
    sostenimientos: [],//Media Superior
    sostenimientoVal: null,//Media Superior
    tiposEvaluacion: [],
    tipoEvaluacionVal: null
  };

  async componentDidMount() {
		//console.log("initStateDisp",this.state);
		this.setState({loading:true});

		setTimeout(() => {
			this.setState({
				entidades: [{"cveEntidad":1,"nombreEntidad":"AGUASCALIENTES"},{"cveEntidad":2,"nombreEntidad":"BAJA CALIFORNIA"},{"cveEntidad":3,"nombreEntidad":"BAJA CALIFORNIA SUR"},{"cveEntidad":4,"nombreEntidad":"CAMPECHE"},{"cveEntidad":7,"nombreEntidad":"CHIAPAS"},{"cveEntidad":8,"nombreEntidad":"CHIHUAHUA"},{"cveEntidad":9,"nombreEntidad":"CIUDAD DE MEXICO"},{"cveEntidad":5,"nombreEntidad":"COAHUILA"},{"cveEntidad":6,"nombreEntidad":"COLIMA"},{"cveEntidad":10,"nombreEntidad":"DURANGO"},{"cveEntidad":15,"nombreEntidad":"ESTADO DE MEXICO"},{"cveEntidad":34,"nombreEntidad":"EXTRANJERO"},{"cveEntidad":11,"nombreEntidad":"GUANAJUATO"},{"cveEntidad":12,"nombreEntidad":"GUERRERO"},{"cveEntidad":13,"nombreEntidad":"HIDALGO"},{"cveEntidad":14,"nombreEntidad":"JALISCO"},{"cveEntidad":16,"nombreEntidad":"MICHOACÁN"},{"cveEntidad":17,"nombreEntidad":"MORELOS"},{"cveEntidad":33,"nombreEntidad":"NATURALIZADO"},{"cveEntidad":18,"nombreEntidad":"NAYARIT"},{"cveEntidad":19,"nombreEntidad":"NUEVO LEON"},{"cveEntidad":20,"nombreEntidad":"OAXACA"},{"cveEntidad":21,"nombreEntidad":"PUEBLA"},{"cveEntidad":22,"nombreEntidad":"QUERETARO"},{"cveEntidad":23,"nombreEntidad":"QUINTANA ROO"},{"cveEntidad":24,"nombreEntidad":"SAN LUIS POTOSI"},{"cveEntidad":25,"nombreEntidad":"SINALOA"},{"cveEntidad":26,"nombreEntidad":"SONORA"},{"cveEntidad":27,"nombreEntidad":"TABASCO"},{"cveEntidad":28,"nombreEntidad":"TAMAULIPAS"},{"cveEntidad":29,"nombreEntidad":"TLAXCALA"},{"cveEntidad":30,"nombreEntidad":"VERACRUZ"},{"cveEntidad":31,"nombreEntidad":"YUCATAN"},{"cveEntidad":32,"nombreEntidad":"ZACATECAS"}],
				loading: false
			});
		}, 3000);
		/*try {
			this.getCurrentVersion();
      const response = await fetch(
        '../rest/catalogos/catalogoEntidadesFederativas',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
          //body: JSON.stringify({})
        }
      );
      
      if (!response.ok) {
        console.log("Status-->" + response.status + " | Error: " + response.statusText);
        throw Error(response.statusText);
      }
      else{
        //console.log("response-->",response);
        const responseJSON = await response.json();
        //console.log("responseJSON-->",responseJSON);
        //jsonResultado: Array(34), msg: "ok", cod: 0, salt: "Thu Jul 05 18:37:50 CDT 2018"
        const entidades = await responseJSON.jsonResultado;
        //DEBUG->console.log("entidades-->",entidades);
        this.setState({
        	entidades,
        	loading: false
        });
        //console.log("finalStateDisp",this.state);
      }
    } catch (error) {
      console.log("Error: " + error);
      this.setState({loading:false});
    }*/
  }

  getCurrentVersion = async () => {
  	/*try {
      const response = await fetch(
        '../rest/catalogos/version',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        console.log("Status-->" + response.status + " | Error: " + response.statusText);
        throw Error(response.statusText);
      }
      else{
        const responseJSON = await response.json();
        // console.log("responseJSON-->",responseJSON);
        const currentVersion = await responseJSON.jsonResultado;
        console.log("Version-->",currentVersion);
        this.setState({ 
		    	currentVersion
		    });
      }
    } catch (error) {
      console.log("Error: " + error);
    }*/

    this.setState({ 
    	currentVersion: '[beta V1.0.0]'
    });
  }

  handleChangeEntidad = async (entidadVal) => {
		//DEBUG->console.log("entidadVal-->",entidadVal)

  	if(this.state.nivelesEducativos.length>0){
  		//DEBUG->console.log("Niveles Educativos cargados");
	    this.setState({ 
	    	entidadVal,
	    	nivelEducativoVal: null,
	    	servicioEducativoVal: null,
	    	modalidadVal: null,
	    	puestoVal: null,
				funcionVal: null,
				categoriaVal: null,
				sostenimientoVal: null,
				tipoEvaluacionVal: null
	    });
  	}
  	else{
	  	//console.log("entidadVal-->",entidadVal)
	    this.setState({ 
	    	entidadVal,
	    	loading: true
	    });

	    setTimeout(() => {
				this.setState({
					nivelesEducativos: [{"cveNivelEducativo":2,"nombreNivelEducativo":"Educación Básica"},{"cveNivelEducativo":3,"nombreNivelEducativo":"Educación Media Superior"}],
					loading: false
				});
			}, 3000);

	    /*try {
	      const response = await fetch(
	        '../rest/catalogos/catalogoNivelesEducativos',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          }
	          //body: JSON.stringify({})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const nivelesEducativos = await responseJSON.jsonResultado;
	        //DEBUG->console.log("nivelesEducativos-->",nivelesEducativos);
	        this.setState({ 
			    	nivelesEducativos,
			    	loading: false
			    });
	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
  	}
  }

  handleChangeNivelEducativo = async (nivelEducativoVal) => {
  	//DEBUG->console.log("nivelEducativoVal-->", nivelEducativoVal)

  	this.setState({ 
    	nivelEducativoVal,
    	serviciosEducativos: [],
    	servicioEducativoVal: null,
    	modalidades: [],
    	modalidadVal: null,
    	puestos: [],
    	puestoVal: null,
    	funciones: [],
			funcionVal: null,
			categorias: [],
			categoriaVal: null,
			sostenimientos: [],
			sostenimientoVal: null,
			tiposEvaluacion: [],
			tipoEvaluacionVal: null,
    	loading: true
    });

    if(nivelEducativoVal==2){
    	//DEBUG->console.log("Nivel Básica");
  	  
  	  setTimeout(() => {
				this.setState({
					serviciosEducativos: [{"cveServicioEducativo":1,"nombreServicioEducativo":"Preescolar"},{"cveServicioEducativo":2,"nombreServicioEducativo":"Primaria"},{"cveServicioEducativo":3,"nombreServicioEducativo":"Secundaria"},{"cveServicioEducativo":0,"nombreServicioEducativo":"Todos los Servicios"}],
					loading: false
				});
			}, 1000);
	    /*try {
	      const response = await fetch(
	        '../rest/catalogos/catalogoServiciosEducativos',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cveNivelEducativo:nivelEducativoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const serviciosEducativos = await responseJSON.jsonResultado;
	        //DEBUG->console.log("serviciosEducativos-->",serviciosEducativos);
	        this.setState({
	        	serviciosEducativos,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
    }
    else if(nivelEducativoVal==3){
    	//DEBUG->console.log("Nivel Media Superior");

    	setTimeout(() => {
				this.setState({
					puestos: [{"cvePuesto":3,"nombrePuesto":"Dirección"},{"cvePuesto":1,"nombrePuesto":"Docente"},{"cvePuesto":5,"nombrePuesto":"Técnico Docente"}],
					loading: false
				});
			}, 1000);
    	
	    /*try {
	      const response = await fetch(
	        '../rest/catalogos/catalogoPuestos',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cveNivelEducativo:nivelEducativoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const puestos = await responseJSON.jsonResultado;
	        //DEBUG->console.log("puestos-->",puestos);
	        this.setState({
	        	puestos,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
    }
    else{
    	this.setState({
				loading: false
			});
    	console.log("Nivel Educativo no válido");
    }
  }

  handleChangeServicioEducativo = async (servicioEducativoVal) => {
  	//DEBUG->console.log("servicioEducativoVal-->",servicioEducativoVal)

  	if(servicioEducativoVal){

	    this.setState({ 
	    	servicioEducativoVal,
	    	modalidades: [],
	    	modalidadVal: null,
	    	puestos: [],
	    	puestoVal: null,
	    	funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
		 	});

	    setTimeout(() => {
				this.setState({
					modalidades: [{"cveModalidad":4,"nombreModalidad":"Educación Especial"},{"cveModalidad":13,"nombreModalidad":"Educación Física"},{"cveModalidad":5,"nombreModalidad":"Educación Para Adultos"},{"cveModalidad":2,"nombreModalidad":"Indígena"},{"cveModalidad":1,"nombreModalidad":"Migrantes"},{"cveModalidad":15,"nombreModalidad":"Regular"}],
					loading: false
				});
			}, 1000);
	    /*try {
	    	var nivelEducativoVal=this.state.nivelEducativoVal;
	      const response = await fetch(
	        '../rest/catalogos/catalogoModalidades',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cveParameter1:nivelEducativoVal, cveParameter2:servicioEducativoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const modalidades = await responseJSON.jsonResultado;
	        //DEBUG->console.log("modalidades-->",modalidades);
	        this.setState({
	        	modalidades,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
  	}
  	else{
    	this.setState({
	    	servicioEducativoVal,
	    	modalidades: [],
	    	modalidadVal: null,
	    	puestos: [],
	    	puestoVal: null,
	    	funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
			});
    	console.log("Servicio Educativo no válido");
    }
  }

  handleChangeModalidad = async (modalidadVal) => {
  	//DEBUG->console.log("modalidadVal-->",modalidadVal);

  	if(modalidadVal){
	    this.setState({ 
	    	modalidadVal,
	    	puestos: [],
	    	puestoVal: null,
	    	funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
	    });

	    setTimeout(() => {
				this.setState({
					puestos: [{"cvePuesto":2,"nombrePuesto":"Asesor Técnico Pedagógico"},{"cvePuesto":3,"nombrePuesto":"Dirección"},{"cvePuesto":1,"nombrePuesto":"Docente"},{"cvePuesto":4,"nombrePuesto":"Supervisión"},{"cvePuesto":5,"nombrePuesto":"Técnico Docente"}],
					loading: false
				});
			}, 1000);
	    /*try {
	    	var nivelEducativoVal=this.state.nivelEducativoVal;
	      const response = await fetch(
	        '../rest/catalogos/catalogoPuestos',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cveNivelEducativo:nivelEducativoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const puestos = await responseJSON.jsonResultado;
	        //DEBUG->console.log("puestos-->",puestos);
	        this.setState({
	        	puestos,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
  	}
  	else{
  		this.setState({
	    	modalidadVal,
	    	puestos: [],
	    	puestoVal: null,
	    	funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
			});
    	console.log("Modalidad no válida");
  	}
  }

  handleChangePuesto = async (puestoVal) => {
  	//DEBUG->console.log("puestoVal-->",puestoVal);

  	if(puestoVal){
	    this.setState({ 
	    	puestoVal,
				funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
	    });

	    setTimeout(() => {
				this.setState({
					funciones: [{"cveFuncion":1,"nombreFuncion":"Docente"}],
					loading: false
				});
			}, 1000);
	    /*try {
	      const response = await fetch(
	        '../rest/catalogos/catalogoFunciones',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cvePuesto:puestoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const funciones = await responseJSON.jsonResultado;
	        //DEBUG->console.log("funciones-->",funciones);
	        this.setState({
	        	funciones,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
  	}
  	else{
  		this.setState({
	    	puestoVal,
				funciones: [],
				funcionVal: null,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
			});
    	console.log("Puesto no válido");
  	}
  }

  handleChangeFuncion = async (funcionVal) => {
  	//DEBUG->console.log("funcionVal-->",funcionVal);

  	var nivelEducativoVal=this.state.nivelEducativoVal;
  	if(funcionVal && nivelEducativoVal){
	    this.setState({ 
				funcionVal,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
	    });

	    if(nivelEducativoVal == 2){
	    	//Consulta TiposEvaluación Básica

	    	setTimeout(() => {
					this.setState({
						tiposEvaluacion: [{"cveTipoEvaluacion":22,"nombreTipoEvaluacion":"Docente. Educación Primaria"},{"cveTipoEvaluacion":47,"nombreTipoEvaluacion":"Docente. Educación Primaria. Inglés"},{"cveTipoEvaluacion":255,"nombreTipoEvaluacion":"Docente. Educación Primaria. Maestro de Enseñanza Artistica"},{"cveTipoEvaluacion":256,"nombreTipoEvaluacion":"Docente. Educación Primaria. Maestro de Taller"},{"cveTipoEvaluacion":258,"nombreTipoEvaluacion":"Docente. Educación Primaria. Maestro de Taller de Lectura y Escritura"},{"cveTipoEvaluacion":300,"nombreTipoEvaluacion":"Docente. Educación Primaria. Multigrado"},{"cveTipoEvaluacion":257,"nombreTipoEvaluacion":"Docente. Educación Primaria. Promotor de TIC"}],
						loading: false
					});
				}, 1000);
	    	/*try {

	    		var objBasica={
            cveParameter1:this.state.nivelEducativoVal,
            cveParameter2:this.state.servicioEducativoVal,
            cveParameter3:this.state.modalidadVal,
            cveParameter4:this.state.puestoVal,
            cveParameter5:funcionVal
          }
          //console.log("objBasica",objBasica);
		      const response = await fetch(
		        '../rest/catalogos/catalogoTiposEvaluacionBasica',
		        {
		          method: 'POST',
		          headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		          },
		          body: JSON.stringify(objBasica)
		        }
		      );
		      
		      if (!response.ok) {
		        console.log("Status-->" + response.status + " | Error: " + response.statusText);
		        throw Error(response.statusText);
		      }
		      else{
		        const responseJSON = await response.json();
		        const tiposEvaluacion = await responseJSON.jsonResultado;
		        //DEBUG->console.log("tiposEvaluacion-->",tiposEvaluacion);
		        this.setState({
		        	tiposEvaluacion,
		        	loading:false
		        });

		      }
		    } catch (error) {
		      console.log("Error: " + error);
		      this.setState({loading:false});
		    }*/
	    }
	    else if(nivelEducativoVal == 3){
	    	//Consulta Catálogo de Categorías

	    	setTimeout(() => {
					this.setState({
						categorias: [{"cveTipoCategoria":2,"nombreCategoria":"Asesor Técnico Pedagógico"},{"cveTipoCategoria":10,"nombreCategoria":"Autoridad Inmediata"},{"cveTipoCategoria":3,"nombreCategoria":"Director"},{"cveTipoCategoria":1,"nombreCategoria":"Docente"},{"cveTipoCategoria":9,"nombreCategoria":"Inspector"},{"cveTipoCategoria":12,"nombreCategoria":"Jefe de Enseñanza"},{"cveTipoCategoria":6,"nombreCategoria":"Jefe de Sector"},{"cveTipoCategoria":11,"nombreCategoria":"Paraescolares"},{"cveTipoCategoria":7,"nombreCategoria":"Subdirector Académico"},{"cveTipoCategoria":8,"nombreCategoria":"Subdirector de Gestión"},{"cveTipoCategoria":4,"nombreCategoria":"Supervisor"},{"cveTipoCategoria":5,"nombreCategoria":"Técnico Docente"}],
						loading: false
					});
				}, 1000);
	    	/*try {
		      const response = await fetch(
		        '../rest/catalogos/catalogoCategorias',
		        {
		          method: 'POST',
		          headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		          }
		          //,body: JSON.stringify(objBasica)
		        }
		      );
		      
		      if (!response.ok) {
		        console.log("Status-->" + response.status + " | Error: " + response.statusText);
		        throw Error(response.statusText);
		      }
		      else{
		        const responseJSON = await response.json();
		        const categorias = await responseJSON.jsonResultado;
		        //DEBUG->console.log("categorias-->",categorias);
		        this.setState({
		        	categorias,
		        	loading:false
		        });

		      }
		    } catch (error) {
		      console.log("Error: " + error);
		      this.setState({loading:false});
		    }*/
	    	//Consulta TiposCategoría
	   //  	this.setState({ 
				// 	loading: true
		  //   });

		  //   setTimeout(() => {
				// 	this.setState({
				// 		categorias: [{"cveCategoria":1,"nombreCategoria":"Categoría 1"},{"cveCategoria":2,"nombreCategoria":"Categoría 2"}],
				// 		loading: false
				// 	});
				// }, 2000);
	    }
	    else{
	    	this.setState({ 
					funcionVal,
					categorias: [],
					categoriaVal: null,
					sostenimientos: [],
					sostenimientoVal: null,
					tiposEvaluacion: [],
					tipoEvaluacionVal: null,
					loading: false
		    });
		    console.log("Función no válida");
	    }
	  }
	  else{
	  	this.setState({ 
				funcionVal,
				categorias: [],
				categoriaVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
	    });
	    console.log("Función no válida");
	  }
  }

  handleChangeCategoria = async (categoriaVal) => {
  	//DEBUG->console.log("categoriaVal-->",categoriaVal);

  	if(categoriaVal){
	    this.setState({ 
				categoriaVal,
				serviciosEducativos: [],
				servicioEducativoVal: null,
				modalidades: [],
				modalidadVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
	    });

	    setTimeout(() => {
				this.setState({
					sostenimientos: [{"cveSostenimiento":6,"nombreSostenimiento":"Estatal"},{"cveSostenimiento":2,"nombreSostenimiento":"Federal"}],
					loading: false
				});
			}, 1000);
	    /*try {
	    	var nivelEducativoVal=this.state.nivelEducativoVal;
	      const response = await fetch(
	        '../rest/catalogos/catalogoSostenimientos',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify({cveNivelEducativo:nivelEducativoVal})
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const sostenimientos = await responseJSON.jsonResultado;
	        //DEBUG->console.log("sostenimientos-->",sostenimientos);
	        this.setState({
	        	sostenimientos,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
	  }
	  else{
	  	this.setState({ 
				categoriaVal,
				serviciosEducativos: [],
				servicioEducativoVal: null,
				modalidades: [],
				modalidadVal: null,
				sostenimientos: [],
				sostenimientoVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
	    });
	  }
  }

  handleChangeSostenimiento = async (sostenimientoVal) => {
  	//DEBUG->console.log("sostenimientoVal-->",sostenimientoVal);

  	if(sostenimientoVal){
	    this.setState({ 
				sostenimientoVal,
				serviciosEducativos: [],
				servicioEducativoVal: null,
				modalidades: [],
				modalidadVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null,
	    	loading: true
	    });

	    setTimeout(() => {
				this.setState({
					tiposEvaluacion: [{"cveTipoEvaluacion":82,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Administración"},{"cveTipoEvaluacion":83,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Biología"},{"cveTipoEvaluacion":84,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Ciencias de la Salud"},{"cveTipoEvaluacion":85,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Derecho"},{"cveTipoEvaluacion":86,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Dibujo"},{"cveTipoEvaluacion":87,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Economía"},{"cveTipoEvaluacion":88,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Etimologías grecolatinas"},{"cveTipoEvaluacion":89,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Física"},{"cveTipoEvaluacion":90,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Geografía"},{"cveTipoEvaluacion":91,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Historia"},{"cveTipoEvaluacion":92,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Historia del Arte"},{"cveTipoEvaluacion":93,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Humanidades (Filosofía, Lógica, Ética y Estética)"},{"cveTipoEvaluacion":94,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Informática"},{"cveTipoEvaluacion":95,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Lectura, Expresión Oral y Escrita"},{"cveTipoEvaluacion":96,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Lengua adicional al español. Inglés"},{"cveTipoEvaluacion":97,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Literatura"},{"cveTipoEvaluacion":98,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Matemáticas"},{"cveTipoEvaluacion":99,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Metodología de la investigación"},{"cveTipoEvaluacion":100,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Psicología"},{"cveTipoEvaluacion":101,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Química"},{"cveTipoEvaluacion":102,"nombreTipoEvaluacion":"Docente.Educación Media Superior.Sociología-Política"},{"cveTipoEvaluacion":133,"nombreTipoEvaluacion":"Rúbrica del Proyecto de Enseñanza. Docente y técnico docente de Educacion Media Superior"}],
					loading: false
				});
			}, 1000);
	    //Consulta TiposEvaluación Media
    	/*try {
    		var objMedia={
          cveParameter1:this.state.nivelEducativoVal,
          cveParameter2:this.state.puestoVal,
          cveParameter3:this.state.funcionVal
        }
        //console.log("objMedia",objMedia);
	      const response = await fetch(
	        '../rest/catalogos/catalogoTiposEvaluacionMedia',
	        {
	          method: 'POST',
	          headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify(objMedia)
	        }
	      );
	      
	      if (!response.ok) {
	        console.log("Status-->" + response.status + " | Error: " + response.statusText);
	        throw Error(response.statusText);
	      }
	      else{
	        const responseJSON = await response.json();
	        const tiposEvaluacion = await responseJSON.jsonResultado;
	        //DEBUG->console.log("tiposEvaluacion-->",tiposEvaluacion);
	        this.setState({
	        	tiposEvaluacion,
	        	loading:false
	        });

	      }
	    } catch (error) {
	      console.log("Error: " + error);
	      this.setState({loading:false});
	    }*/
	  }
	  else{
	  	this.setState({ 
				sostenimientoVal,
				serviciosEducativos: [],
				servicioEducativoVal: null,
				modalidades: [],
				modalidadVal: null,
				tiposEvaluacion: [],
				tipoEvaluacionVal: null
	    });
	  }
  }

  handleChangeTipoEvaluacion = (tipoEvaluacionVal) => {
  	//DEBUG->console.log("tipoEvaluacionVal-->",tipoEvaluacionVal);

  	this.setState({
  		tipoEvaluacionVal
  	});

  	// if(tipoEvaluacionVal){
  	// 	document.getElementById("btnSearchPlazas").removeAttribute("disabled");
  	// }
  	// else{
  	// 	document.getElementById("btnSearchPlazas").setAttribute("disabled", true);
  	// }
  }

  setMapRef = (element) => {
  	this.mapRef=element;
  }

  moveCenter = (lat, lng) => {
  	// console.log("ref-->",this.mapRef);
  	// console.log("google-->",google);
  	//const map = this.mapRef.map
  	let latLng = new google.maps.LatLng(lat, lng);
   	this.mapRef.map.panTo(latLng);
   	this.mapRef.map.setZoom(10);
  }

  centerMapAroundMarkers = (markers) => {
  	//console.log("centerMapAroundMarkers...");

  	//creating empty LatLngBounds object
		var bounds = new google.maps.LatLngBounds();

  	for (let i = 0; i < markers.length; i++) {
		  var position = new google.maps.LatLng(markers[i].lat, markers[i].lng);

		  //extending the bounds to include each marker's position
		  bounds.extend(position);
		}
		
		//fit the map to the newly inclusive bounds
		this.mapRef.map.fitBounds(bounds);
   	//this.mapRef.map.setZoom(10);
   	//console.log("Map Centered!");
  }


  clearMarkers = () => {
  	this.setState({
  		markers: []
  	});
  }

  searchMarkers = async () => {
  	var valid = this.state.tipoEvaluacionVal?true:false;

  	if(valid){
	  	//Educación Básica
	  	if(this.state.nivelEducativoVal == 2 || this.state.nivelEducativoVal == 3){
	  		// console.log("Ubicando Marcadores Básica-->", objBasica);
	  		this.setState({ 
		    	loading: true
		    });
		    
	  		setTimeout(() => {
	  			const markers = [{"id":129268,"cct":"10DPR0036S","lat":25.616837,"lng":-103.50159,"name":"PROF. GREGORIO TORRES QUINTERO","phone":"Sin información","address":"CALLE OLIVOS, GÓMEZ PALACIO C.P. 35000, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129271,"cct":"10DPR0039P","lat":25.607758,"lng":-103.48789,"name":"JOSE SANTOS VALDEZ","phone":"Sin información","address":"CALLE IGLESIA DEL JOPE, GÓMEZ PALACIO C.P. 00000, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129273,"cct":"10DPR0041D","lat":25.60745,"lng":-103.492775,"name":"FERNANDO MONTES DE OCA","phone":"Sin información","address":"CALLEJÓN DEL PIRUL, GÓMEZ PALACIO C.P. 35015, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129275,"cct":"10DPR0043B","lat":25.582127,"lng":-103.47275,"name":"JUSTO SIERRA","phone":"8717141976","address":"PRIVADA DE LA RULETA, GÓMEZ PALACIO C.P. 35049, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129301,"cct":"10DPR0069J","lat":25.607515,"lng":-103.49279,"name":"FERNANDO MONTES DE OCA","phone":"Sin información","address":"CALLEJÓN DEL PIRUL, GÓMEZ PALACIO C.P. 35015, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129305,"cct":"10DPR0073W","lat":25.558178,"lng":-103.5368,"name":"GUADALUPE VICTORIA","phone":"8717251692","address":"CALLE ANAHEL, LERDO C.P. 35157, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129306,"cct":"10DPR0074V","lat":25.59943,"lng":-103.51385,"name":"LEONA VICARIO","phone":"Sin información","address":"CALLE VISTA HERMOSA, GÓMEZ PALACIO C.P. 35044, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129312,"cct":"10DPR0080F","lat":25.599497,"lng":-103.51391,"name":"LEONA VICARIO","phone":"Sin información","address":"AVENIDA VISTA HERMOSA, GÓMEZ PALACIO C.P. 35029, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129372,"cct":"10DPR0162P","lat":25.748636,"lng":-103.34466,"name":"MELCHOR OCAMPO","phone":"Sin información","address":"RINCONADA C.P. 35110, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129566,"cct":"10DPR0357B","lat":25.831615,"lng":-103.849174,"name":"VICENTE GUERRERO SALDANA","phone":"Sin información","address":"PRIVADA ZARAGOZA, MAPIMÍ C.P. 35200, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129637,"cct":"10DPR0428F","lat":25.562283,"lng":-103.490265,"name":"GENERAL EMILIANO ZAPATA","phone":"8717156161","address":"CALLE CUAUHTEMOC, GÓMEZ PALACIO C.P. 00000, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129652,"cct":"10DPR0443Y","lat":25.563992,"lng":-103.512695,"name":"LIC. FRANCISCO GOMEZ PALACIO","phone":"8717148672","address":"ANDADOR DOCTOR RIVA PALACIO, GÓMEZ PALACIO C.P. 35057, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129742,"cct":"10DPR0533Q","lat":25.537592,"lng":-103.514046,"name":"GENERAL FRANCISCO VILLA","phone":"8717251692","address":"CALLE PASEO DE LAS PALMAS, LERDO C.P. 35150, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129767,"cct":"10DPR0558Z","lat":26.101583,"lng":-103.44273,"name":"LIC. GUSTAVO DIAZ ORDAZ","phone":"Sin información","address":"CALLE DALIAS, TLAHUALILO DE ZARAGOZA C.P. 35290, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129786,"cct":"10DPR0577N","lat":25.515781,"lng":-103.4879,"name":"GUADALUPE VICTORIA","phone":"Sin información","address":"CALLE TERCERA, VILLA DE GUADALUPE C.P. 35150, DURANGO","totalQuantity":2,"totalAssigned":0},{"id":129787,"cct":"10DPR0578M","lat":25.388947,"lng":-103.33864,"name":"GUADALUPE VICTORIA","phone":"Sin información","address":"NAZARENO DE ABAJO C.P. 34174, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129822,"cct":"10DPR0613B","lat":25.39874,"lng":-103.42124,"name":"CUAUHTEMOC","phone":"Sin información","address":"CALLE FRANCISCO SARABIA, NAZARENO C.P. 35188, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129851,"cct":"10DPR0642X","lat":25.558617,"lng":-103.50313,"name":"FORD 11","phone":"8717142719","address":"CALLE MARTIRES, GÓMEZ PALACIO C.P. 35045, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129858,"cct":"10DPR0649Q","lat":25.571589,"lng":-103.52454,"name":"GENERAL JESUS AGUSTIN CASTRO","phone":"8717195903","address":"CALLE LUZ GARCIA DE CAMPILLO, GÓMEZ PALACIO C.P. 35025, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":129957,"cct":"10DPR0748Q","lat":25.841642,"lng":-103.6241,"name":"22 DE FEBRERO","phone":"Sin información","address":"VEINTIDÓS DE FEBRERO C.P. 35102, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130003,"cct":"10DPR0794B","lat":25.063776,"lng":-103.73942,"name":"DEL CENTENARIO","phone":"Sin información","address":"VELARDEÑA C.P. 35810, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130041,"cct":"10DPR0832O","lat":25.661032,"lng":-103.41343,"name":"JESUS GARCIA","phone":"Sin información","address":"ESTACIÓN VIÑEDO C.P. 35140, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130045,"cct":"10DPR0836K","lat":25.507172,"lng":-103.518715,"name":"JESUS BETANCOURT","phone":"Sin información","address":"CALLE NICOLAS BRAVO, CARLOS REAL (SAN CARLOS) C.P. 35180, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130068,"cct":"10DPR0859V","lat":25.25995,"lng":-103.94535,"name":"NIÑOS HEROES DE CHAPULTEPEC","phone":"67160257","address":"EMILIO CARRANZA C.P. 35730, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130080,"cct":"10DPR0871Q","lat":25.73343,"lng":-103.630035,"name":"JESUS GARCIA CORONA","phone":"Sin información","address":"DINAMITA C.P. 35100, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130126,"cct":"10DPR0917V","lat":25.39971,"lng":-103.41526,"name":"MIGUEL HIDALGO","phone":"Sin información","address":"CALLE MARIANO MATAMOROS, NAZARENO C.P. 35188, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130127,"cct":"10DPR0918U","lat":25.29386,"lng":-103.99718,"name":"REVOLUCION","phone":"67160257","address":"CALLE REVOLUCION, GENERAL LÁZARO CÁRDENAS (PUEBLO NUEVO) C.P. 35710, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130150,"cct":"10DPR0941V","lat":25.455727,"lng":-103.74804,"name":"VALENTIN GOMEZ FARIAS","phone":"87120000","address":"EJIDO 21 DE MARZO C.P. 35179, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130151,"cct":"10DPR0942U","lat":25.528229,"lng":-103.528465,"name":"MIGUEL LOPEZ","phone":"8717252243","address":"CALLE CORONADO, LERDO C.P. 35155, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130181,"cct":"10DPR0972O","lat":25.547241,"lng":-103.479706,"name":"RICARDO FLORES MAGON","phone":"8717191572","address":"CALLE ALBERTO M. ALVARADO, GÓMEZ PALACIO C.P. 00000, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130301,"cct":"10DPR1093Q","lat":25.228941,"lng":-103.46519,"name":"LEONA VICARIO","phone":"Sin información","address":"SAN JOSÉ DE ZARAGOZA C.P. 35960, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130322,"cct":"10DPR1114M","lat":25.719597,"lng":-103.521614,"name":"MIGUEL HIDALGO","phone":"Sin información","address":"COLONIA AGRÍCOLA BUENDÍA C.P. 35123, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130329,"cct":"10DPR1121W","lat":25.775324,"lng":-103.40689,"name":"PRIMERO DE MAYO","phone":"Sin información","address":"ARCINAS C.P. 35121, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130339,"cct":"10DPR1131C","lat":25.667906,"lng":-103.4236,"name":"NARCISO MENDOZA","phone":"Sin información","address":"EL CASTILLO C.P. 35171, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130416,"cct":"10DPR1208A","lat":26.521784,"lng":-104.13277,"name":"GUADALUPE VICTORIA","phone":"Sin información","address":"AVENIDA VICENTE GUERRERO, CEBALLOS C.P. 35210, DURANGO","totalQuantity":1,"totalAssigned":1},{"id":130513,"cct":"10DPR1305C","lat":25.39861,"lng":-103.42115,"name":"GENERAL FRANCISCO VILLA","phone":"Sin información","address":"CALLE FRANCISCO SARABIA, NAZARENO C.P. 35188, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130543,"cct":"10DPR1335X","lat":25.556211,"lng":-103.48438,"name":"DR. HECTOR MAYAGOITIA DOMINGUEZ","phone":"8717230371","address":"CALLE NICASIO CHAVEZ, GÓMEZ PALACIO C.P. 35060, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130547,"cct":"10DPR1339T","lat":25.582302,"lng":-103.51829,"name":"GENERAL NICOLAS FERNANDEZ","phone":"8717159262","address":"CALLE JUAN PABLO ESTRADA, GÓMEZ PALACIO C.P. 35028, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130615,"cct":"10DPR1407Z","lat":25.69019,"lng":-103.3864,"name":"AGUSTINA SANCHEZ VIELMA","phone":"Sin información","address":"SAN FELIPE C.P. 35118, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130644,"cct":"10DPR1436V","lat":25.004995,"lng":-104.16511,"name":"NICOLAS BRAVO","phone":"67160257","address":"SAN JOSÉ DEL PAJARITO (PAJARITO) C.P. 35700, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130689,"cct":"10DPR1481H","lat":25.586473,"lng":-103.494446,"name":"FRANCISCO GOMEZ PALACIO","phone":"Sin información","address":"AVENIDA FILADELFIA, GÓMEZ PALACIO C.P. 35010, DURANGO","totalQuantity":2,"totalAssigned":0},{"id":130690,"cct":"10DPR1482G","lat":25.563875,"lng":-103.51268,"name":"SILVESTRE REVUELTAS","phone":"Sin información","address":"ANDADOR DOCTOR RIVA PALACIO, GÓMEZ PALACIO C.P. 35057, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130734,"cct":"10DPR1526N","lat":25.578465,"lng":-103.52802,"name":"ANDRES QUINTANA ROO","phone":"8717195903","address":"AVENIDA LUIS QUINTERO, GÓMEZ PALACIO C.P. 35025, DURANGO","totalQuantity":2,"totalAssigned":0},{"id":130735,"cct":"10DPR1527M","lat":25.586525,"lng":-103.49447,"name":"FRANCISCO GOMEZ PALACIO","phone":"Sin información","address":"AVENIDA FILADELFIA, GÓMEZ PALACIO C.P. 35010, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130765,"cct":"10DPR1557G","lat":25.578493,"lng":-103.52795,"name":"ANDRES QUINTANA ROO","phone":"8717195903","address":"AVENIDA LUIS QUINTERO, GÓMEZ PALACIO C.P. 35025, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130780,"cct":"10DPR1572Z","lat":25.579632,"lng":-103.532974,"name":"DR. GUSTAVO BAZ PRADA","phone":"8717195903","address":"ANDADOR 38, GÓMEZ PALACIO C.P. 35025, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130813,"cct":"10DPR1605Z","lat":25.579523,"lng":-103.53301,"name":"DR. GUSTAVO BAZ PRADA","phone":"8717195903","address":"GÓMEZ PALACIO C.P. 35025, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130844,"cct":"10DPR1642D","lat":25.522833,"lng":-103.52453,"name":"FRANCISCO ZARCO","phone":"8717254411","address":"AVENIDA TULIPANES, LERDO C.P. 35150, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130921,"cct":"10DPR1720R","lat":25.582218,"lng":-103.47274,"name":"JUSTO SIERRA","phone":"8717141976","address":"PRIVADA DE LA RULETA, GÓMEZ PALACIO C.P. 35049, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130939,"cct":"10DPR1738Q","lat":25.588457,"lng":-103.47587,"name":"LIC. LUIS DONALDO COLOSIO MURRIETA","phone":"Sin información","address":"CALLE TIERRA, GÓMEZ PALACIO C.P. 35020, DURANGO","totalQuantity":1,"totalAssigned":0},{"id":130953,"cct":"10DPR1752J","lat":25.599564,"lng":-103.48595,"name":"JOSE VASCONCELOS","phone":"Sin información","address":"CALLE SAN MARTIN, GÓMEZ PALACIO C.P. 35015, DURANGO","totalQuantity":1,"totalAssigned":0}];
					this.setState({
						markers,
						loading: false
					});
					this.centerMapAroundMarkers(markers);
				}, 2000);
		    //Consulta Disponibilidad
	    	/*try {
		  		this.setState({ 
			    	loading: true
			    });

		  		if(this.state.sostenimientoVal > 0){
		  			var urlDisponibilidad='../rest/catalogos/disponibilidadPlazasSostenimiento';
		    		var objBasica={
		          cveParameter1:this.state.entidadVal,
		          cveParameter2:this.state.tipoEvaluacionVal,
		          cveParameter3:this.state.sostenimientoVal
		        }
		        //DEBUG->console.log("objBasica",objBasica);
		  		}
		  		else{
		  			var urlDisponibilidad='../rest/catalogos/disponibilidadPlazas';
		    		var objBasica={
		          cveParameter1:this.state.entidadVal,
		          cveParameter2:this.state.tipoEvaluacionVal
		        }
		        //DEBUG->console.log("objBasica",objBasica);
		  		}
		      const response = await fetch(
		        urlDisponibilidad,
		        {
		          method: 'POST',
		          headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		          },
		          body: JSON.stringify(objBasica)
		        }
		      );
		      
		      if (!response.ok) {
		        console.log("Status-->" + response.status + " | Error: " + response.statusText);
		        throw Error(response.statusText);
		      }
		      else{
		        const responseJSON = await response.json();
		        const markers = await responseJSON.jsonResultado;
		        //DEBUG->console.log("markers-->",markers);
		        
		        if (markers.length>0){
		        	this.setState({
			        	markers,
			        	alertActive:false,
			        	loading:false
			        });
			        //this.moveCenter(markers[0].lat,markers[0].lng);
			        this.centerMapAroundMarkers(markers);
		        }
		        else{
		        	this.setState({
			        	alertActive:true,
			        	loading:false
			        });
			        setTimeout(() => {
								this.onClose();
							}, 8000);
		        }
		      }
		    } catch (error) {
		      console.log("Error: " + error);
		      this.setState({loading:false});
		      alert("Error: " + error);
		    }*/
	  	}
	  	/*
	  	//Educación Media Superior
	  	else if(this.state.nivelEducativoVal == 3){
	  		var objMedia={
          cveParameter1:this.state.nivelEducativoVal,
          cveParameter2:this.state.servicioEducativoVal,
          cveParameter3:this.state.modalidadVal,
          cveParameter4:this.state.puestoVal,
          cveParameter5:this.state.funcionVal,
          cveParameter6:this.state.tipoEvaluacionVal
        }
	  		//console.log("Ubicando Marcadores Media Superior-->", this.state);
	  		//console.log("Ubicando Marcadores Media Superior-->", objMedia);

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
		        }
		      ]
		    });
		    //this.moveCenter(markers[0].lat,markers[0].lng);
			  //this.centerMapAroundMarkers(markers);
	  	}
	  	*/
	  	else{
	  		console.log("Nivel Educativo inválido para buscar Plazas");
	  		alert("Nivel Educativo inválido para buscar Plazas");
	  	}
  	}
  	else{
    	console.log("Favor de ingresar los datos faltantes");
    	alert("Favor de ingresar los datos faltantes");
  	}
  }

  toggleCaret = () => {
  	this.setState({ 
  		openedPanel: !this.state.openedPanel 
  	})
  }

  onClose = () => {
  	this.setState({
  		alertActive: false
  	});
  }

	render(){
		return(
			<div>
				<YoutubeButton url="https://www.youtube.com/channel/UCtAOxgu4Y3AvR9lHJjv8NGQ/videos" text=" Video tutorial" />
				<AccordionPanel
					title="Selección de filtros para mostrar Plazas Disponibles"
					toggleCaret={this.toggleCaret}
					openedPanel={this.state.openedPanel}
				>
					<FilterForm 
						entidades={this.state.entidades}
				    entidadVal={this.state.entidadVal}
				    handleChangeEntidad={this.handleChangeEntidad}
				    nivelesEducativos={this.state.nivelesEducativos}
				    nivelEducativoVal={this.state.nivelEducativoVal}
				    handleChangeNivelEducativo={this.handleChangeNivelEducativo}
				    serviciosEducativos={this.state.serviciosEducativos}//Básica
				    servicioEducativoVal={this.state.servicioEducativoVal}//Básica
				    handleChangeServicioEducativo={this.handleChangeServicioEducativo}
				    modalidades={this.state.modalidades}//Básica
				    modalidadVal={this.state.modalidadVal}//Básica
				    handleChangeModalidad={this.handleChangeModalidad}
				    puestos={this.state.puestos}
				    puestoVal={this.state.puestoVal}
				    handleChangePuesto={this.handleChangePuesto}
				    funciones={this.state.funciones}
				    funcionVal={this.state.funcionVal}
				    handleChangeFuncion={this.handleChangeFuncion}
				    categorias={this.state.categorias}//Media Superior
				    categoriaVal={this.state.categoriaVal}//Media Superior
				    handleChangeCategoria={this.handleChangeCategoria}
				    sostenimientos={this.state.sostenimientos}//Media Superior
				    sostenimientoVal={this.state.sostenimientoVal}//Media Superior
				    handleChangeSostenimiento={this.handleChangeSostenimiento}
				    tiposEvaluacion={this.state.tiposEvaluacion}
				    tipoEvaluacionVal={this.state.tipoEvaluacionVal}
				    handleChangeTipoEvaluacion={this.handleChangeTipoEvaluacion}
				    searchMarkers={this.searchMarkers}
					/>
				</AccordionPanel>

			  { /*Can be replaced with a modal*/
					this.state.alertActive &&
					<AlertText 
						title="¡Sin Resultados!"
						msg="No se encontraron centros de trabajo con plazas de acuerdo a la información proporcionada"
					/>
				}

				<GoogleMapsContainer markers={this.state.markers} setRef={this.setMapRef}/>

		    { /*Refresh and Clear Buttons*/
		    	this.state.markers.length>0 &&
		    	<BottomButtonDuo
		    		firstBtnInfo="Actualizar marcadores"
		    		firstBtnIcon="refresh"
		    		firstBtnHandleClick={this.state.tipoEvaluacionVal?this.searchMarkers:null}
		    		firstBtnDisabled={this.state.tipoEvaluacionVal?false:true}
		    		secondBtnInfo="Quitar marcadores"
		    		secondBtnIcon="remove"
		    		secondBtnHandleClick={this.state.markers?this.clearMarkers:null}
						secondBtnDisabled={false}
		    	/>
		    }

		    { /*Current Version*/
		    	this.state.currentVersion &&
		    	<ApplicationVersion currentVersion={ this.state.currentVersion }/>
		    }

		    { /*Loader*/
		    	this.state.loading &&
			    <CubeLoader />
		    }

	    </div>
		)
	}
};

export default DisponibilidadPlazas;