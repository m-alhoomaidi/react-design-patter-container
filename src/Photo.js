import React from "react";
export const Photo = ({ photo }) => {
    const { title, id, albumId, url, thumbnailUrl } = photo
    return (
        <div key={id} className='card'>
            <h1>{title}</h1>
            <img src={thumbnailUrl} alt={title} />
        </div>
    )
}