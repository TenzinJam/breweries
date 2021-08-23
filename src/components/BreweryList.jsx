import React, { Component } from 'react';
import ReactLoading from 'react-loading'

class BreweryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true
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
          this.setState({loading: !this.state.loading})
        })
    console.log(this.state.latitude)
  }

  compileAddress(item){
    return `${item.street}, ${item.city}, ${item.state}, ${item.postal_code}`
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          (<ReactLoading type="spinningBubbles" color="#FFD700" height={700} width={300}/>):
          (<ol>{this.state.list.map(brewery => <li key={brewery.id}><a href={brewery.website_url} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer noopener">{brewery.name}</a>, {brewery.brewery_type},{this.compileAddress(brewery)}</li>)}
          </ol>)
        }
      </div>
    );
  }
}

export default BreweryList;
