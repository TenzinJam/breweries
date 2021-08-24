import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'
import GoogleMapReact from 'google-map-react'
import key from '../config/key'
import { FiMapPin } from 'react-icons/fi'

Brewery.defaultProps = {
  center: {lat: 40.73, lng: -73.93},
  zoom: 11
}

function Marker(){
  return (
    <div>
      <FiMapPin color="red" size={20}/>
    </div>
  )
}
function Brewery(props){
  const [brewery, setBrewery] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    async function fetchData(){
      let res = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      res = await res.json()
      setBrewery(res)
    }
    fetchData()
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setLatitude(latitude)
      setLongitude(longitude)
    })

  }, [id])

  return (
    <div style={{ height: '50vh', width: '50%', marginTop: '10px', marginLeft: '40px'}}>
      <div>{brewery ?
      (<div>
        <h1>{brewery.name}</h1>
        <h3>Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}</h3>
      </div>)
      : <ReactLoading type="spinningBubbles" color="" height={70} width={300}/>}</div>
      {brewery && (<GoogleMapReact
          bootstrapURLKeys={{ key: key.apiKey }}
          defaultCenter={props.center}
          center={{ lat: latitude, lng: longitude}}
          defaultZoom={props.zoom}
          // onChildMouseEnter={onChildMouseEnter}
          // onChildMouseLeave={onChildMouseLeave}
        >
          <Marker
            lat={brewery && brewery.latitude}
            lng={brewery && brewery.longitude}
            text={brewery && brewery.name}
          />
        </GoogleMapReact>)}
    </div>
  )
}

export default Brewery
