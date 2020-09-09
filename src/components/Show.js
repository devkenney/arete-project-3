import React, { useState, useEffect } from "react";
import axios from "axios";


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
    },[])

    // const showComics = this.props.comics.map((comic, i) => {
    //     return (
    //         <div key={comic.id}>
    //             <h1>{comic.title}</h1>
    //         </div>
    //     )
    // })
    // const { thumbnail } = comics
    // console.log(comics.thumbnail.path)
    // console.log(JSON.parse(comics.thumbnail))
    // console.log(JSON.parse(comics.thumbnail))
    return (

                <div>
                    <h1>{id}</h1>
                    <h1>{comics.title}</h1>
                    {/* <img src={`${JSON.parse(comics.thumbnail.path)}/standard_fantastic.${JSON.parse(comics.thumbnail.extension)}`} /> */}
                    <p>{comics.description}</p>
                    <p>{comics.issn}</p>
  
                </div>

                

        
        )
    }
    export default Show;