import React, { useState } from 'react';
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
  async function fetchFavorites() {
    const response = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/users/favorites', {token: localStorage.token});
    updateFavs(response);
    }
  fetchFavorites();
  return (
    <Container>
      <CardColumns>
      {favorites.map((element) => {
        return (
          <Card>
            <Card.Img variant="top" src={`${element.path}/standard_fantastic.${element.extension}`} />
            <Card.Body>
              <Card.Title><a href={`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/comics/${element.id}`}>{element.title}</a></Card.Title>
            </Card.Body>
          </Card>
        )
      })}
      </CardColumns>
    </Container>
  )
}