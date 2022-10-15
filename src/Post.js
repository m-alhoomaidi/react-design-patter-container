import React from "react";


export const Post = ({ post }) => {

    const { title, id, userId, body } = post
    return (
        <div key={id} className='card'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>

    )
}