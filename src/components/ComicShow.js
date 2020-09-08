import React from 'react'
import Media from 'react-bootstrap/Media'

function ComicShow(props) {
    const { title, thumbnail } = props.comic;

    return (
        <Media>
            <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} />
            <Media.Body>
                <h5>{title}</h5>
            </Media.Body>
        </Media>
    )
}

export default ComicShow;