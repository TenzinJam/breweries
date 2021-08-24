import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'
import GoogleMapReact from 'google-map-react'
import key from '../config/key'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/brewery.css'

Brewery.defaultProps = {
  center: {lat: 40.73, lng: -73.93},
  zoom: 10
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
    <div>
      <nav style={ {flex: 'display', justifyContent: 'space-around' } }>
        <Link to="/breweryList" style={{ textDecoration: 'none', left:'100px'}}>Back to List</Link>
      </nav>
      <div>{brewery ?
        (<div >
          <h1 className="card">{brewery.name}</h1>
          <h4 style={{ paddingLeft: '40px'}}>Address:{brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}</h4>
        </div>)
      : <ReactLoading type="spinningBubbles" color="" height={70} width={300}/>}
      </div>
      <div style={{ height: '50vh', width: '50%', marginLeft: '40px'}}>
        {brewery && (<GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
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

    </div>
  )
}

export default Brewery
