import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return <div >
       <span className="header"  onClick={()=>window.scroll(0,0)} style={{display: 'flex',justifyContent: 'space-around'}}>
       <div style={{display:'flex',alignItems: 'center',padding:'10px 0'}}>
       <img src="https://img.icons8.com/ultraviolet/40/000000/cinema---v2.png"/>
        Cinemaa
        </div>
        {isUser && (
          <Button  onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Button>
        )}

       </span>
       </div>
};

export default Header;

const Button=styled.button`

    display: inline-block;
     padding:0.5em 2em;
    font-family:'Anek Odia',sans-serif;
    text-align:center;
    margin:0 0.3em 0.3em 0;
 box-sizing: border-box;
box-shadow:1px 1.5px 2px 1px #e2e8f0;
background-color:#67e8f9;

border:none;
    transition: all 0.15s;

`