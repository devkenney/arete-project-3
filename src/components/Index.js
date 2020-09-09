import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicShow from "./ComicShow";

function Index(props) {
    const [comics, setComics] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {

            const response = await axios.get('https://superwiki-backend.herokuapp.com' + `/marvel/comics/`);
            setComics(response.data.data.results);
        }
        fetchData();
    }, [page]);

    const showComics = comics.map((comic, i) => {
        return (
            <div key={i}>
                <ComicShow comic={comic} />
            </div>
        )
    })
    return <div>{showComics}</div>
}

export default Index;