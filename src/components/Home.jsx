import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homePage.css'

export default function Home(){
  return (
    <div>
      <h1>Welcome to Elixir</h1>
        <button>
          <Link to="/breweryList" style={{ textDecoration: 'none' }}>Breweries Near You!!</Link>
        </button>
    </div>
  )
}
