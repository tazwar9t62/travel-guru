import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 21.4272,
      lng: 92.0058,
    },
    zoom: 10,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{ height: "80vh", width: "100%" }}
        className="rounded shadow mr-3"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBoHfGO_i8AUp21LF6xVU2AjYRez2WECXY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={18.456} lng={90.33} text="Hotel Sea Crown" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
