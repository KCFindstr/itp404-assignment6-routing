import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import AnimalPage from './AnimalPage';
import PageNotFound from './PageNotFound';
import AuthorPage from './AuthorPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Animals</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/animals/cats">Cats</NavLink>
            </li>
            <li>
              <NavLink to="/animals/chickens">Chickens</NavLink>
            </li>
            <li>
              <NavLink to="/animals/cows">Cows</NavLink>
            </li>
            <li>
              <NavLink to="/animals/dogs">Dogs</NavLink>
            </li>
            <li>
              <NavLink to="/animals/pigs">Pigs</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/animals/:animal" component={AnimalPage}></Route>
          <Route path="/author/:user" component={AuthorPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
