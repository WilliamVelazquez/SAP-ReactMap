import React, {Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const API_KEY = "AIzaSyB1f1jgpIsdHCg1d_LmXzhI5a4rbi1JjWk";

//MEXICO lat and lng
const MEXICO = {
  lat:19.4326077,
  lng:-99.13320799999997
};

const MAP_ZOOM = 14;

class GoogleMapsContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
    // markers: []
  }

  componentDidMount(){
    //console.log("renderMap", this.state);
    console.log("Ubicando Marcadores-->", this.state);
  }
  
  onMarkerClick = (props, marker, e) => {
    // console.log("props",props);
    // console.log("marker",marker);
    // console.log("e",e);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '100%',
      height: '100%', 
      // marginLeft: 'auto',
      // marginRight: 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { MAP_ZOOM }
        initialCenter = { MEXICO }
        //center = { this.state.selectedPlace.position }
        // initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >
        {
          this.props.markers.map(marker => {
            return (
              <Marker
                onClick = { this.onMarkerClick }
                title = { marker.title }
                name = { marker.title }
                position = {{ lat: marker.lat, lng: marker.lng }}
                infoTitle = { marker.infoTitle }
                infoPhone = { marker.infoPhone }
                infoTotal = { marker.infoTotal }
                infoAvailable = { marker.infoAvailable }
                infoUnavailable = { marker.infoUnavailable }
                animation={this.props.google.maps.Animation.DROP}
                key = {marker.id}
              />
            )
          })
        }
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div style={{color: 'black', textAlign:'center'}}>
            <h3>{ this.state.selectedPlace.infoTitle }</h3>
            <p>{ this.state.selectedPlace.infoTotal }</p>
            <p>{ this.state.selectedPlace.infoAvailable + " / " + this.state.selectedPlace.infoUnavailable }</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: (API_KEY),
    language: "es"
})(GoogleMapsContainer);