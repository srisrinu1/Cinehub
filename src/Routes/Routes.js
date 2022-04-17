import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import styled from 'sttyled-components'
import { Container } from "@material-ui/core";
import {Oval} from "react-loader-spinner";
import Header from '../components/Header/Header';
import SimpleBottomNavigation from '../components/MainNav';
import Login from '../Pages/Login';
import Error from '../Pages/Error';
import Trending from '../Pages/Trending/Trending';
import Movies from '../Pages/Movies/Movies';
import Search from '../Pages/Search/Search';
import Series from '../Pages/Series/Series';
import PrivateRoute from '../Pages/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

import '../App.css';
import SingleContent from '../components/SingleContent/SingleContent';

function Routes() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const isUser=isAuthenticated && user;
  console.log(isAuthenticated);
  console.log(user);
  console.log(isUser);
  if(isLoading){
    return( <div style={{
      minHeight:'100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      color="#2caeba"
      secondaryColor="#6ee7b7"

    />
    </div>
    );
  }
  return (
    <Router>
  <Header/>


    <div className="App">
      <Container>
        <Switch>

        <Route path="/" exact>
          <Login/>
          </Route>

          <PrivateRoute path="/trending" >
             <Trending/>
          </PrivateRoute>
          <PrivateRoute path="/movies">
          <Movies/>
          </PrivateRoute>
          <PrivateRoute path="/series"  >
          <Series/>
          </PrivateRoute>

          <PrivateRoute path="/search">
            <Search/>
          </PrivateRoute>




          {/* {isUser && <SimpleBottomNavigation/>} */}

          <Route path="*" exact>
            <Error/>
          </Route>
          <SimpleBottomNavigation/>






        </Switch>
      </Container>
    </div>
    {isAuthenticated && <SimpleBottomNavigation />}
  </Router>
  );
}

export default Routes;


