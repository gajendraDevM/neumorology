import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 16.7056963,
      lng: 74.4728756
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="container mx-auto" style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={16.7056963}
          lng={74.4728756}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}