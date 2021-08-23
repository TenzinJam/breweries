import React from 'react';
import './styles/homePage.css'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import BreweryList from './components/BreweryList';
import Home from './components/Home';

function App(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </nav>
          <Switch>
            <Route path="/breweryList" exact component={BreweryList}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App
