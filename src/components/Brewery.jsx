import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'
import GoogleMapReact from 'google-map-react'
import key from '../config/key'

Brewery.defaultProps = {
  zoom: 11
}

function Brewery(props){
  const [brewery, setBrewery] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    async function fetchData(){
      let res = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      res = await res.json()
      setBrewery(res)

    }
    fetchData()
  }, [id])

  return (
    <div style={{ height: '50vh', width: '50%', marginTop: '80px', marginLeft: '40px'}}>
      <div>{brewery ?
        (<div>
          <h1>{brewery.name}</h1>
          <GoogleMapReact
            bootstrapURLKeys={{ key: key.apiKey }}
            defaultCenter={{lat: brewery.latitude, lng: brewery.longitude}}
            defaultZoom={props.zoom}
          >
          </GoogleMapReact>
        </div>)
        : <ReactLoading type="spinningBubbles" color="" height={70} width={300}/>}</div>

    </div>
    )
}

export default Brewery
