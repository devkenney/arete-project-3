import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default function Favorites(props) {
  const history = useHistory();  
  if (!localStorage.token) {
    history.push('/signup');
  }
  
  const [favorites, updateFavs] = useState([]);
  useEffect(() => {
  async function fetchFavorites() {
    const response = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/users/favorites/?token=' + localStorage.token);
    updateFavs(response.data);
    }
  fetchFavorites();
  console.log(favorites);
  },[]);
  return (
    <Container>
      <CardColumns>
      {favorites.map((element) => {
        return (
          <Card>
            <a href={`/comics/${element.id}`}>
              <Card.Img variant="top" src={`${element.thumbnail}/portrait_uncanny.${element.extension}`} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
              </Card.Body>
              </a>
          </Card>
        )
      })}
      </CardColumns>
    </Container>
  )
}