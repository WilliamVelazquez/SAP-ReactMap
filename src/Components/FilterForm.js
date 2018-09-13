//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, { PureComponent } from 'react';
import Select from 'react-select';

import ButtonRow from '../Components/ButtonRow';

import '../css/filter-form.css';
import '../css/select.css';

const CLEAN_TEXT="Limpiar";
const NO_RESULT_TEXT="Sin elementos encontrados";
const SEARCH_PROMT_TEXT="Ingresa texto a buscar";

//function FilterForm(props) {
class FilterForm extends PureComponent{
	render() {
		const props=this.props;
		return (
			<div>
	      <div className="formSAP">
	      	<div>
		      	<label>
	            Entidad:
	          </label>
						<Select 
							simpleValue
							clearable
							searchable
							//ref="entidadSelect"
							options={props.entidades}
							name="select-entidad"
							value={props.entidadVal}
							onChange={props.handleChangeEntidad}
							valueKey="cveEntidad"
							labelKey="nombreEntidad"
							placeholder="Selecciona una Entidad Federativa..."
							clearValueText={CLEAN_TEXT}
							noResultsText={NO_RESULT_TEXT}
							searchPromptText={SEARCH_PROMT_TEXT}
						/>
	      	</div>

	      	{
	      		props.entidadVal &&
	      		<div>
			      	<label>
	              Nivel Educativo:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="nivelEducativoSelect"
								options={props.nivelesEducativos}
								name="select-nivel"
								value={props.nivelEducativoVal}
								onChange={props.handleChangeNivelEducativo}
								valueKey="cveNivelEducativo"
								labelKey="nombreNivelEducativo"
								placeholder="Selecciona un Nivel Educativo..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.nivelEducativoVal == 2) &&
	      		<div>
			      	<label>
	              Servicio Educativo:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="servicioEducativoSelect"
								options={props.serviciosEducativos}
								name="select-servicio"
								value={props.servicioEducativoVal}
								onChange={props.handleChangeServicioEducativo}
								valueKey="cveServicioEducativo"
								labelKey="nombreServicioEducativo"
								placeholder="Selecciona un Servicio Educativo..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.nivelEducativoVal == 2 && props.servicioEducativoVal) &&
	      		<div>
			      	<label>
	              Modalidad:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="modalidadSelect"
								options={props.modalidades}
								name="select-modalidad"
								value={props.modalidadVal}
								onChange={props.handleChangeModalidad}
								valueKey="cveModalidad"
								labelKey="nombreModalidad"
								placeholder="Selecciona una Modalidad..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.modalidadVal || props.nivelEducativoVal == 3) &&
	      		<div>
			      	<label>
	              Puesto:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="puestoSelect"
								options={props.puestos}
								name="select-puesto"
								value={props.puestoVal}
								onChange={props.handleChangePuesto}
								valueKey="cvePuesto"
								labelKey="nombrePuesto"
								placeholder="Selecciona un Puesto..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.puestoVal) &&
	      		<div>
			      	<label>
	              Función:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="funcionSelect"
								options={props.funciones}
								name="select-funcion"
								value={props.funcionVal}
								onChange={props.handleChangeFuncion}
								valueKey="cveFuncion"
								labelKey="nombreFuncion"
								placeholder="Selecciona una Función..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.nivelEducativoVal == 3 && props.funcionVal) &&
	      		<div>
			      	<label>
	              Categoría:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="categoriaSelect"
								options={props.categorias}
								name="select-categoria"
								value={props.categoriaVal}
								onChange={props.handleChangeCategoria}
								valueKey="cveTipoCategoria"
								labelKey="nombreCategoria"
								placeholder="Selecciona una Categoría..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		props.categoriaVal &&
	      		<div>
			      	<label>
	              Sostenimiento:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="sostenimientoSelect"
								options={props.sostenimientos}
								name="select-sostenimiento"
								value={props.sostenimientoVal}
								onChange={props.handleChangeSostenimiento}
								valueKey="cveSostenimiento"
								labelKey="nombreSostenimiento"
								placeholder="Selecciona un Sostenimiento..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}

	      	{
	      		(props.sostenimientoVal || (props.nivelEducativoVal == 2 && props.funcionVal)) &&
	      		<div>
			      	<label>
	              Tipo de Evaluación:
	            </label>
							<Select 
								simpleValue
								clearable
								searchable
								//ref="tipoEvaluacionSelect"
								options={props.tiposEvaluacion}
								name="select-funcion"
								value={props.tipoEvaluacionVal}
								onChange={props.handleChangeTipoEvaluacion}
								valueKey="cveTipoEvaluacion"
								labelKey="nombreTipoEvaluacion"
								placeholder="Selecciona un Tipo de Evaluación..."
								clearValueText={CLEAN_TEXT}
								noResultsText={NO_RESULT_TEXT}
								searchPromptText={SEARCH_PROMT_TEXT}
							/>
		      	</div>
	      	}
	      </div>
	      
	      {
	      	props.tipoEvaluacionVal &&
	      	<ButtonRow 
	      		btnInfo="Ubicar plazas"
	      		btnText="Ubicar plazas"
	      		btnIcon="map-marker"
	      		btnHandleClick={props.tipoEvaluacionVal?props.searchMarkers:null}
	      		btnDisabled={props.tipoEvaluacionVal?false:true}
	      	/>
	      }
	    </div>
		);
	}
}

export default FilterForm;