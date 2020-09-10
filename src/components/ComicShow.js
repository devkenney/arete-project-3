import React from 'react'
import Media from 'react-bootstrap/Media'

function ComicShow(props) {
    const { title, thumbnail, id} = props.comic;


    return (
        <Media>
            <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} />
            <Media.Body>
                <a href={`/comics/${id}`}><h4>{title}</h4></a>
            </Media.Body>
        </Media>
    )
}

export default ComicShow;