import React, { Component } from 'react';
import ReactLoading from 'react-loading'
import '../styles/breweryList.css'
import CardComponent from './CardComponent';

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

  render() {
    return (
      <div>
        {this.state.loading ?
          (<ReactLoading type="spinningBubbles" color="" height={70} width={300}/>):
          (<ul>{this.state.list.map(brewery => (<li><CardComponent key={brewery.id} props={brewery}/></li>))}</ul>)
        }
      </div>
    );
  }
}

export default BreweryList;
