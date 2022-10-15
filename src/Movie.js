import React from "react";

export const Movie = ({ movie }) => {
    const { id, title, year, director, rating, runtime, poster } = movie || null
    return (
        <div key={id}>
            <img src={poster} alt={title} />
            <p>{title} by {director} was released on {year}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}