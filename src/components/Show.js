import React, { useState, useEffect } from "react";
import axios from "axios";
import Media from 'react-bootstrap/Media'

function Show(props) {
    const id = props.match.params.id;
    const [comics, setComics] = useState({});

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
                <p>{comics.characters?.name}</p>
            </Media.Body>
        </Media>





    )
}
export default Show;