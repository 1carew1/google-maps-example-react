import React, { Component } from 'react';
import GoogleMap from './maps/GoogleMap';

class App extends Component {
  render() {
  	const markers = [{lat: 52.2534813, lng: -7.1904148}, {lat: 52.2504813, lng: -7.1901148}, {lat: 52.2539813, lng: -7.1909148}];
    return (
      <div className="App">
        <GoogleMap markers={markers}/>
      </div>
    );
  }
}

export default App;
