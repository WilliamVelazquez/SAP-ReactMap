//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {PureComponent} from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

import Loader from '../Components/Loader';
import MarkPoint from '../Components/MarkPoint';
import SideNavBar from '../Components/SideNavBar';

import Available from '../svg/Available.svg'
import Unavailable from '../svg/Unavailable.svg'

const API_KEY = "AIzaSyB1f1jgpIsdHCg1d_LmXzhI5a4rbi1JjWk";

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

class GoogleMapsContainer extends PureComponent {
  state = {
    google:this.props.google,
    map: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
    // markers: []
  }

  componentWillReceiveProps(newProps){
    if( newProps.markers !== this.props.markers ){
      // console.log("Cambio en Marcadores...");
      this.setState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
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

    var latLng = new google.maps.LatLng(location.lat, location.lng);
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
    // console.log("mapProps",mapProps);
    // console.log("map",map);
    // console.log("google",google);

    // //var latLng = new google.maps.LatLng(19.4326077, -99.13320799999997); //Makes a latlng
    // // var latLng = new google.maps.LatLng(DURANGO.lat, DURANGO.lng); //Makes a latlng
    //  var latLngMX = new google.maps.LatLng(MEXICO.lat, MEXICO.lng); //Makes a latlng
    // // var mapInstance = new google.maps.Map(document.getElementById('mapInst'), {
    // //   zoom: 16,
    // //   center: latLng
    // // });
    // // console.log("mapInstance",mapInstance);

    
    // map.panTo(latLngMX);

    // //var latLng = new google.maps.LatLng(19.4326077, -99.13320799999997); //Makes a latlng

    // // google.center(MEXICO);
    // // setTimeout(() => {
    // //   mapInstance.panTo(latLngMX)
    // // },5000);
    
    // console.log("ready->",props);
    //const service = new google.maps.places.PlacesService(map);
  }

  render() {
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
      <Map
        //item
        //xs = { 12 }
        ref = {this.props.setRef}
        //style = { style }
        className = "fullSpace"
        google = { this.props.google }
        onClick = { this.onMapClick }
        onReady = { this.onMapReady }
        zoom = { MAP_ZOOM }
        initialCenter = { MEXICO }
        // initialCenter = { this.props.markers.length>0 ? { lat: this.props.markers[0].lat, lng: this.props.markers[0].lng }: DURANGO }
        //center = { this.state.selectedPlace.position }
        // initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >
        {
          this.props.markers.map(marker => {
            //this.state.google
            //bounds.extend(new google.maps.LatLng(marker.lat,marker.lng));
            //position: new google.maps.LatLng(locations[i][1], locations[i][2])
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
                onClick = { this.onMarkerClick }
                // styles={testStyle}
                //animation={this.props.google.maps.Animation.DROP}
              />
            )
          })
        }
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div className="infoWindow">
            <br />
            <h4 className="title">{ this.state.selectedPlace.name }</h4>
            <div className="disponibilidadInfo">
              <div className="availableInfo">
                <strong>{ this.state.selectedPlace.infoAvailable }</strong>
                <p>Disponibles</p>
              </div>
              <div className="unavailableInfo">
                <strong>{ this.state.selectedPlace.infoUnavailable }</strong>
                <p>Asignadas</p>
              </div>
            </div>
            
          </div>
        </InfoWindow>
        <SideNavBar 
          active={ (Object.keys(this.state.selectedPlace).length == 0)?false:true } 
          place={this.state.selectedPlace}
        />
      </Map>
    );
  }
}

const LoadingContainer = (props) => (
  <div className="row">
    <div className="loadingContainer col-md-12">
      <Loader color="black" size={64} />
    </div>
  </div>
)

export default GoogleApiWrapper({
    apiKey: (API_KEY),
    LoadingContainer: LoadingContainer,
    language: 'es',
    region: 'MX' 
})(GoogleMapsContainer);