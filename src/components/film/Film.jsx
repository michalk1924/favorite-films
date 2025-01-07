import React from 'react'
import styles from './Film.module.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Film({ film, handleChnageIsFavorite, isFavorite }) {

    const truncateDescription = (description) => {
        return description.length > 200 ? description.slice(0, 200) + '...' : description;
    };

    return (
        <div className={styles.filmCard} key={film.episode_id}>
            <h2>{film.title}</h2>
            <p><strong>DiretruncateDescriptionctor:</strong> {film.director}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p>{truncateDescription(film.opening_crawl)}</p>
            <button onClick={() => handleChnageIsFavorite(film)}>
                {isFavorite(film) ? <FaStar /> : <CiStar />}
            </button>
        </div>
    )
}

export default Film