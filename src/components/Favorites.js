import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function Favorites(props) {
  const history = useHistory();  
  if (!props.isLoggedIn) {
    history.push('/signup');
  }
  const [favorites, updateFavs] = useState([]);
  async function fetchFavorites() {
    const response = await axios.get((process.env.API_URL || 'http://localhost:3001') + '/favorites', {token: localStorage.token});
    updateFavs(response);
  }
  fetchFavorites();
  return (
    <Container>
      
    </Container>
  )
}