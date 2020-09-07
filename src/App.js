import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage.js';
import Index from './components/Index.js';
import Memorial from './components/Memorial.js';
import LogIn from './components/LogIn.js';
import Show from './components/Show.js';
import SignUp from './components/SignUp.js';


import './App.css';

const App = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    isLoggedIn: false
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleSignUp = async (event) => {}
  const handleLogIn = async (event) => {}

  const handleLogOut = () => {
    setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div className="body">
        <Switch>  
          <Route
            path="/signup"
            render={() => {
              return (
                <SignUp />
              );
            }}
          />
                 
          <Route
            path="/memorial"
            render={() => {
              return (
                <Memorial/>
              );
            }}
          />       
          <Route
            path="/login"
            render={() => {
              return (
                <LogIn/>
              );
            }}
          />
          <Route
            path="/comics"
            render={() => {
              return <Index/>;
            }}
          />

          <Route
            path="/"
            render={() => {
              return (
                <Homepage/>
              );
            }}
          />  
        
        </Switch>
      </div>
    </div>
  );
}
export default App;