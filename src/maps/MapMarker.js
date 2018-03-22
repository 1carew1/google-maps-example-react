import React, { Component } from 'react';

class MapMarker extends Component {

  constructor(props) {
    super(props);
    this.state = {marker : null};
  }


  componentDidMount(){
    const google = window.google;
    const map = this.props.map;
    if(map) {
      const marker = new google.maps.Marker({
            position: this.props.position,
            animation: google.maps.Animation.DROP,
            map: map,
            icon : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=C|00D900'
      });
      marker.addListener('click', () => {
          map.panTo(marker.getPosition());
      });
      this.setState({
        marker : marker
      });
    }
  }

  render() {
    return (
      <div />
    );
  }
}

export default MapMarker;
