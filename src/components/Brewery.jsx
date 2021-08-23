import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'

function Brewery(){
  const [brewery, setBrewery] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchData(){
      let res = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      res = await res.json()
      setBrewery(res)
    }
    fetchData()
  }, [])

  return (
    <div>
      {brewery ? <h1>{brewery.name}</h1>: <ReactLoading type="spinningBubbles" color="" height={70} width={300}/>}
    </div>
    )

}

export default Brewery
