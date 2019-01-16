import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import Pin from '../../assets/map-pin.svg';
const MapPin = () => <img src={Pin}/>;



class MapSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 53,
        lng: -2.5
      },
      zoom: 6,
      locations: [],
      loaded: false,
    }

    this.getLocations = this.getLocations.bind(this);
    this.mapLocations = this.mapLocations.bind(this);
    this.createPins = this.createPins.bind(this);
  }

  componentDidMount() {
    const url = "http://coffeedrop.staging2.image-plus.co.uk/api/locations";
    this.getLocations(url)
  }

  /**
   *
   * @param {array} data
   * Mapaing data from Api to get only coordinates values of shops
   */
  mapLocations(data) {
    return data.map(location => ({
        ...location.coordinates
    }))
  }


  /**
   *
   * @param {string} url
   * get list of location and check if there are another API paginated pages. Merge all data into state.locations
   *
   */
  getLocations( url ) {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState(prev => ({ locations: prev.locations.concat(data.data)}))
        return data;
      }).then(data => {
        if (data.links.next) {
          this.getLocations(data.links.next)
        } else {
          this.setState({ loaded: true })
        }
      }).catch(err => console.log(err));
  }

  // Map all locations as Pins for map.
  createPins() {
    const locations = this.mapLocations(this.state.locations);

    return locations.map(location => (
      <MapPin
        lat={location.latitude}
        lng={location.longitude}
      />
    ))
  }


  render() {
    console.log(this.mapLocations(this.state.locations))
    return (
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXamU3FqM8XQ6_syIAUfWZOseQCn7F0sY'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          { this.createPins() }
        </GoogleMapReact>
      </div>
     );
  }
}


export default MapSection;