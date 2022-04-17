import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

console.log(process.env.REACT_APP_CLIENT);
console.log(process.env.REACT_APP_API_KEY);

ReactDOM.render(
 <Auth0Provider
 domain={process.env.REACT_APP_DOMAIN}
 clientId={process.env.REACT_APP_CLIENT}
 redirectUri={window.location.origin}
 cacheLocation="localstorage"
 >
    <App />
    </Auth0Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
