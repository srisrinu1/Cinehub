import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Container } from "@material-ui/core";
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';

import './App.css';

function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
       <Container>
       Movie app
        <Switch>
          <Route path="/" component={Trending}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/series" component={Series}/>
          <Route path="/search" component={Search}/>
        </Switch>
       </Container>
    </div>
     <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
