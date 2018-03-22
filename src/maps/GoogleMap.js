import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount(){
  	const google = window.google;
    const mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    // Bad practive in React but will do for now
	const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  render() {
    return (
      <div id="map" style={{height : '100vh', width : '100vw'}}>
      </div>
    );
  }
}

export default GoogleMap;
