import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Homepage from './components/Homepage.js';
import Index from './components/Index.js';
import Memorial from './components/Memorial.js';
import LogIn from './components/LogIn.js';
import Show from './components/Show.js';
import SignUp from './components/SignUp.js';
import NavbarComponent from './components/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Container from 'react-bootstrap/Container'
import ComicShow from './components/ComicShow.js';

import './App.css';

const App = () => {
  const history = useHistory(); //for redirect after login

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

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/signup', {
        username: state.username,
        password: state.password
      });
      localStorage.token = await response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        username: state.username,
        password: state.password,
      });
      localStorage.token = await response.data.token;
      setIsLoggedIn(true);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    setState({
      username: "",
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
    <Container>
      <NavbarComponent 
        handleLogOut={handleLogOut}
        isLoggedIn={isLoggedIn}
      />
      <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={() => {
              return (
                <SignUp 
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
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
                <LogIn
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path={`/comics/:id`}
            component={Show}
           />
           
          <Route
            path="/comics"
            render={() => {
              return <Index />;
            }}
          />

          <Route
            path="/"
            render={() => {
              return (
                <Homepage
                  isLoggedIn={isLoggedIn}
                />
              );
            }}
          />  
          
        
        </Switch>
      </div>
    </Container>
    <Footer/>
    </div>
  );
}
export default App;