import React, { Component } from 'react';

class BreweryList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }

  render() {
    return (
      <div>
        <h1>Welcome to Elixir</h1>
        <img src="https://heltonbrewing.com/wp-content/uploads/2015/07/Brewery.jpg" alt="stockImage" />
        <button>Breweries Near You!!</button>
      </div>

    );
  }
}

export default BreweryList;
