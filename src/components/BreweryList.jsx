import React, { Component } from 'react';

class BreweryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
     };
     this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData () {
    let latitude
    let longitude
    navigator.geolocation.getCurrentPosition(async (position) => {
          latitude = position.coords.latitude
          longitude = position.coords.longitude
          console.log(latitude, longitude)
          let data = await fetch(`https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}&per_page=50`)
          let breweries = await data.json()
          console.log(breweries)
          this.setState( {list: breweries} )
        })
    console.log(this.state.latitude)
  }

  compileAddress(item){
    return `${item.street}, ${item.city}, ${item.state}, ${item.postal_code}`
  }

  render() {
    return (
      <div>
        <h1>Welcome to Elixir</h1>
        <img src="https://heltonbrewing.com/wp-content/uploads/2015/07/Brewery.jpg" alt="stockImage" />
        <button>Breweries Near You!!</button>
        <ol>{this.state.list.map(brewery => <li key={brewery.id}>
          <a href={brewery.website_url}>{brewery.name}</a>, {brewery.brewery_type},{this.compileAddress(brewery)}</li>)}
        </ol>
      </div>
    );
  }
}

export default BreweryList;
