import React from 'react'

function Film({ film }) {
    return (
        <div key={film.episode_id}>
            <h2>{film.title}</h2>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p>{film.opening_crawl}</p>
        </div>
    )
}

export default Film