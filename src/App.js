import { useEffect, useState, useRef } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const App = () => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(-0.112869)
  const [latitude, setLatitude] = useState(51.504)

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true
      },
      center: [longitude, latitude],
      zoom: 14
    })

    setMap(map)

  }, [])

  return (
    <div className="app">
      <div ref={mapElement} className="map"></div>
    </div>
  );
}

export default App;
