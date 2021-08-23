import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'

function Brewery(){
  const [brewery, setBrewery] = useState(null)
  const { id } = useParams()
  console.log("id", id)

  useEffect(() => {
    console.log("hello")
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
     .then(res => res.json())
      .then(result => {
        setBrewery(result)
      })
    console.log(brewery)
  }, [])

  return (
    <div>
      {brewery ? <h1>{brewery.name}</h1>: <ReactLoading type="spinningBubbles" color="" height={70} width={300}/>}
    </div>
    )

}

export default Brewery
