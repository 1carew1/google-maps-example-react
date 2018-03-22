import React, { Component } from 'react';
import MapMarker from './MapMarker';

class GoogleMap extends Component {
  
  constructor(props) {
    super(props);
    this.state = {map : null};
  }


  componentDidMount(){
  	const google = window.google;
    const mapOptions = {
        center: new google.maps.LatLng(52.253325, -7.187162),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    // Bad practive in React but will do for now as gives full control of all Google Maps Functions
	const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.setState({
    	map : map
    });
  }

  render() {
  	let markers = null;
  	let googleMap = this.state.map;
  	if(googleMap && this.props.markers) {
  		markers = this.props.markers.map((position, index) => {
  			return <MapMarker position={position} map={googleMap} key={index}/>
  		});
  	}
    return (
      <div id="map" style={{height : '100vh', width : '100vw'}}>
       {markers}
      </div>
    );
  }
}

export default GoogleMap;
