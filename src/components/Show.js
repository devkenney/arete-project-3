import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button, InputGroup, Form, Media} from 'react-bootstrap'

function Show(props) {
    const id = props.match.params.id;
    const [comics, setComics] = useState({});

    const newFav = async (event) => {
        try {
          const response = await axios.put('http://localhost:3001/users/favorites', {
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
            const response = await axios.get(`http://localhost:3001/marvel/comics/${id}`)
            console.log(response)
            setComics(response.data.data.results[0]);
        } fetchID()
    }, [])

    return (

        <Media>
            <img src={`${comics.thumbnail?.path}/standard_fantastic.${comics.thumbnail?.extension}`} />
            <Media.Body>
                <h1>{comics.title}</h1>
                <p>{comics.description}</p>
                <Form>
                    <Button value="submit" onClick={newFav}>Add to Favorites</Button>
                </Form>
            </Media.Body>
        </Media>
    )
}

export default Show;