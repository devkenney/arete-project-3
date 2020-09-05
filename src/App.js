import React, { useState, useEffect } from 'react';

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

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("", {
        username: state.username,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("", {
        username: state.username,
        password: state.password
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error)
    }
  }

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

}


export default App;
