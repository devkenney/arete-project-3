import React, { useState, useEffect } from "react";
import axios from "axios";

function Show(props) {
    const { title, description } = props.comic;
    const [id, setID] = useState();

        async function fetchID() {
            const response = await axios.get(`http://localhost:3001/marvel/comics/${id}`);
            
        }

    return (
        <div>
            <h1>This is Show for ID: {title}</h1>
        </div>
    );
}

export default Show;