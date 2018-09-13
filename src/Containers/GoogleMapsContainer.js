//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, { PureComponent } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import MapContent from '../Components/MapContent';
import LoadingContainer from '../Components/LoadingContainer';

const API_KEY = "AIzaSyB1f1jgpIsdHCg1d_LmXzhI5a4rbi1JjWk";

class GoogleMapsContainer extends PureComponent {
  state = {
    google:this.props.google,
    map: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    filteredMarkers: []
  }

  componentWillReceiveProps(newProps){
    if( newProps.markers !== this.props.markers ){
      // console.log("Cambio en Marcadores...");
      this.setState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        filteredMarkers: []
      });
    }
  }
  
  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    //DEBUG->console.log(props);
    //console.log(props.google);
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false
        /*,activeMarker: null*/
      });
    }
  }

  //function to center the map in specific location with panTo/setCenter
  centerMap=(location)=>{
    const { map, google } = this.state;

    let latLng = new google.maps.LatLng(location.lat, location.lng);
    map.panTo(latLng);
    // //console.log("props-->", this.props.google.maps);
    // console.log("map-->",map);
    // console.log("google-->",google);
    // console.log("location-->",location);

    // //var latLng = new google.maps.LatLng(location.lat, location.lng); //Makes a latlng
    // //map.setCenter(location);
    // //maps.panTo(latLng);
    // //map.setZoom(16);
  }

  onMapReady = (mapProps,map) => {
    //const {google} = mapProps;
    console.log("Map Ready");
    this.setState({
      //google,
      map
    });
  }

  filterInfo = (query) => {
    //console.log("Query-->",query);
    if(this.props.markers.length>0){
      //console.log("markers-->",this.props.markers);
      const filterItems = this.props.markers.filter(marker => (marker.cct.includes(query.toUpperCase())));
      //const filterItems = this.props.markers.filter(marker => (marker.name.indexOf(query.toLowerCase()) > -1)?return marker:return null);
      //const filterItems = this.props.markers.filter(marker => (marker.name.indexOf(query.toLowerCase()) > -1));
      //console.log("filterItems-->",filterItems);
      this.setState({
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        filteredMarkers: filterItems
      });
    }
    else{console.log("Sin marcadores disponibles!");}
  }

  render() {
    return (
      <MapContent 
        setRef = { this.props.setRef }
        google = { this.props.google }
        //mapClick = { this.onMapClick }
        mapReady = { this.onMapReady }
        markers = { this.state.filteredMarkers.length>0 ? this.state.filteredMarkers:this.props.markers }
        filterInfo = { this.filterInfo }
        filteredMarkers = { this.state.filteredMarkers }
        markerClick = { this.onMarkerClick }
        activeMarker = { this.state.activeMarker }
        showingInfoWindow = { this.state.showingInfoWindow }
        selectedPlace = { this.state.selectedPlace }
        //zoom = { MAP_ZOOM }
        //mapCenter = { MEXICO }
      />
    );
  }
}

export default GoogleApiWrapper({
    apiKey: (API_KEY),
    LoadingContainer,
    language: 'es',
    region: 'MX' 
})(GoogleMapsContainer);
