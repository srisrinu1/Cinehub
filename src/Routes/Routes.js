import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Container } from "@material-ui/core";
import Header from '../components/Header/Header';
import SimpleBottomNavigation from '../components/MainNav';
import Trending from '../Pages/Trending/Trending';
import Movies from '../Pages/Movies/Movies';
import Search from '../Pages/Search/Search';
import Series from '../Pages/Series/Series';

import '../App.css';
import SingleContent from '../components/SingleContent/SingleContent';

function Routes() {
  return (
    <Router>
    <Header />


    <div className="App">
      <Container>

        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />

        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </Router>
  );
}

export default Routes;
