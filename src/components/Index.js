import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicShow from "./ComicShow";

function Index(props) {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/marvel/comics");
            setComics(response.data.data.results);
        }
        fetchData();
    }, [comics]);

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