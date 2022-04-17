import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import styled from "styled-components";
import loginImage from "../Images/loginImage.svg";
import {Link} from "react-router-dom";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImage} alt="Movie" />
        {/* <h1>GitTails</h1> */}
        <button className="btn" onClick={loginWithRedirect}>
          login / signup
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width:80%;
  }
  button{
    display: inline-block;
     padding:0.5em 3em;
    font-family:'Anek Odia',sans-serif;
    text-align:center;
    margin:0 0.3em 0.3em 0;
 box-sizing: border-box;
box-shadow:1px 1.5px 2px 1px #e2e8f0;
background-color:#67e8f9;

border:none;
    transition: all 0.15s;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;