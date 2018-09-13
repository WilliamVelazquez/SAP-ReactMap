//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react'
import { InfoWindow, Map, Marker } from 'google-maps-react';

import '../css/google-map-container.css';

import Search from '../Containers/Search';
import MarkPoint from '../Components/MarkPoint';
import SideNavBar from '../Components/SideNavBar';
import InfoWindowContent from '../Components/InfoWindowContent';

import Available from '../svg/Available.svg'
import Unavailable from '../svg/Unavailable.svg'

function MapContent(props) {

	//MEXICO lat and lng
	const MEXICO = {
	  lat:19.4326077,
	  lng:-99.13320799999997
	};

	//DURANGO lat and lng
	const DURANGO = {
	  lat:25.57005292,
	  lng:-103.5000238
	};

	const MAP_ZOOM = 16;
	const availableMarker = {
    //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
    url: Available,//'./src/svg/Available.svg',
    scaledSize: new google.maps.Size(40, 40),
  }
  const unavailableMarker = {
    //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
    url: Unavailable,//'./src/svg/Unavailable.svg',
    scaledSize: new google.maps.Size(40, 40),
  }

  return (
    <div className="row">
      <div id="mapInst" className="mapContainer col-md-12">
        <Map
          //item
          //xs = { 12 }
          ref = {props.setRef}
          //style = { style }
          className = "fullSpace"
          google = { props.google }
          //onClick = { props.mapClick }
          onReady = { props.mapReady }
          zoom = { MAP_ZOOM }
          initialCenter = { MEXICO }
          // initialCenter = { props.markers.length>0 ? { lat: props.markers[0].lat, lng: props.markers[0].lng }: DURANGO }
          //center = { state.selectedPlace.position }
          // initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
        >
          {
            props.markers.length>0 &&
            <Search filterInfo={ props.filterInfo } results={ props.filteredMarkers }/>
          }
          {
            props.markers.map(marker => {
              return (
                <Marker
                  title = { marker.name }
                  name = { marker.cct }
                  position = {{ lat: marker.lat, lng: marker.lng }}
                  infoTitle = { marker.name }
                  infoPhone = { marker.phone }
                  infoAddress = { marker.address}
                  infoTotal = { marker.totalQuantity }
                  infoAvailable = { (marker.totalQuantity - marker.totalAssigned) }
                  infoUnavailable = { marker.totalAssigned }
                  key = {marker.id}
                  icon = {((marker.totalQuantity - marker.totalAssigned)>0) ? availableMarker : unavailableMarker}
                  onClick = { props.markerClick }
                  // styles={testStyle}
                  //animation={props.google.maps.Animation.DROP}
                />
              )
            })
          }
          <InfoWindow
            marker = { props.activeMarker }
            visible = { props.showingInfoWindow }
          >
            <InfoWindowContent 
              title={ props.selectedPlace.name }
              firstText="Disponibles"
              firstNumber={ props.selectedPlace.infoAvailable }
              secondText="Asignadas"
              secondNumber={ props.selectedPlace.infoUnavailable }
            />
          </InfoWindow>
          <SideNavBar 
            active={ (Object.keys(props.selectedPlace).length == 0)?false:true } 
            place={props.selectedPlace}
          />
        </Map>
      </div>
    </div>
  )
}

export default MapContent;