import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinate = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  const center = getCenter(coordinate)

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sudeepbhandari/cktph52x8108h17o0f9udt0x8"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-level="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
