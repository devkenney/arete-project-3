import React from 'react'
import Media from 'react-bootstrap/Media'

function ComicShow(props) {
    const { title, thumbnail,  _id } = props.comic;

    return (
        <Media>
            <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} />
            <Media.Body>
                <a href={`/comics/${_id}`}><h5>{title}</h5></a>
            </Media.Body>
        </Media>
    )
}

export default ComicShow;