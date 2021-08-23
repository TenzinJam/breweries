import React from 'react'
import '../styles/cardComponent.css'
import { Link } from 'react-router-dom'

export default function CardComponent({props}){

  function compileAddress(props) {
    return `${props.street}, ${props.city}, ${props.state}, ${props.postal_code}`
  }

  return (
    <div className="card">

      <h4 style={{textAlign: "center"}}><Link to={`breweryList/${props.id}`}>{props.name}</Link></h4>
      <a id="Link" href={props.website_url} target="_blank" rel="noreferrer noopener">Website</a>
      <h4 style={{textAlign: "center"}}>Type: {props.brewery_type}</h4>
      <h6 style={{textAlign: "center"}}>Address: {compileAddress(props)}</h6>
    </div>
  )
}

