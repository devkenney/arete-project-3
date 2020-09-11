import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button, InputGroup, Form, Media} from 'react-bootstrap'

function Show(props) {
    const id = props.match.params.id;
    const [comics, setComics] = useState({});

    const newFav = async (event) => {
        try {
          const response = await axios.put((process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/users/favorites', {
            newFav: {
                id: id,
                title: comics.title,
                thumbnail: comics.thumbnail?.path,
                extension: comics.thumbnail?.extension,
            },
            token: localStorage.token
          });
        } catch (error) {
          console.log(error);
        }
      }
    

    useEffect(() => {
        async function fetchID() {
            console.log('UseEffect running')
            const response = await axios.get((process.env.REACT_APP_API_URL || `http://localhost:3001`) + `/marvel/comics/${id}`)
            console.log(response)
            setComics(response.data.data.results[0]);
        } fetchID()
    }, [])

    const createTitle = () => {
        return {__html: comics.title}
    }
    const createDescription = () => {
        return {__html: comics.description}
    }

    const [favorites, updateFavs] = useState([]);
    useEffect(() => {
    async function fetchFavorites() {
        const response = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/users/favorites/?token=' + localStorage.token);
        updateFavs(response.data);
        }
    fetchFavorites();
    console.log("blablafavorites: ", favorites);
    },[]);

    const formButton = () => {
        if(localStorage.token) {
            return (
                <Form>
                    <Button value="submit" onClick={newFav}>Add to Favorites</Button>
                </Form>
            );
        } else {
            return (
                <p><a href='/signup'>Sign Up</a> or <a href='/login'>Log In</a> to add this comic to your Favorites</p>
            )
            
        }
    }
    

    return (
        <Media>
            <img alt={comics.title} src={`${comics.thumbnail?.path}/portrait_uncanny.${comics.thumbnail?.extension}`}/>
            <Media.Body>
                <h1 dangerouslySetInnerHTML={createTitle()}></h1>
                <p dangerouslySetInnerHTML={createDescription()}></p>
                {formButton()}
            </Media.Body>
        </Media>
    )
}

export default Show;