import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicShow from "./ComicShow";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

function Index(props) {
    const [comics, setComics] = useState([]);
    const [page, setPage] = useState(1);
    const [change, setChange] = useState(false);

    useEffect(() => {
        async function fetchData() {

            const response = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/marvel/comics/?page=' + page);
            setComics(response.data.data.results);
        }
        fetchData();
        setChange(false);
    }, [change]);

    const showComics = comics.map((comic, i) => {
        return (
            <div key={i}>
                <ComicShow comic={comic} />
            </div>
        )
    })
    return(
        <div className="text-center">
            <ButtonGroup>
                <Button variant="outline-dark" 
                    onClick={() => {
                        if (page > 1) setPage(page - 1)
                        setChange(true)
                        }}>Previous</Button>
                <Button variant="outline-dark" 
                    onClick={() => {
                        setPage(page + 1)
                        setChange(true)
                }}>Next</Button>
            </ButtonGroup>
            {showComics}
        </div>
    )
}

export default Index;