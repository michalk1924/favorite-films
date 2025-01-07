import React, { useEffect, useState } from 'react'
import getAllFilms from '../../service'
import Film from '../film/Film'
import styles from './FilmsList.module.css'

function FilmsList() {

    const [films, setFilms] = useState([]);
    const [favoritesFilms, setFavoritesFilms] = useState([]);

    const handleChnageIsFavorite = (film) => {
        try {
            const updatedFavoritesFilms = favoritesFilms.includes(film.episode_id)
                ? favoritesFilms.filter(id => id !== film.episode_id)
                : [...favoritesFilms, film.episode_id];
            localStorage.setItem('favoritesFilms', JSON.stringify(updatedFavoritesFilms));
            setFavoritesFilms(updatedFavoritesFilms);
        }
        catch (error) {
            console.error(error);
        }
    }

    const isFavorite = film => favoritesFilms.includes(film.episode_id);

    useEffect(() => {

        const fetchFilms = async () => {
            try {
                const fetchedFilms = await getAllFilms();
                setFilms(fetchedFilms);
                const favoritesFilmsArray = localStorage.getItem('favoritesFilms');
                if (favoritesFilmsArray) {
                    setFavoritesFilms(JSON.parse(favoritesFilmsArray));
                }
                else {
                    localStorage.setItem('favoritesFilms', JSON.stringify([]));
                    setFavoritesFilms([]);
                }
            }
            catch (error) {
                console.error(error);
            }
        };

        fetchFilms();

    }, []);


    return (
        <div className={styles.container}>
            {films?.map(film => (
                <Film film={film}
                    handleChnageIsFavorite={handleChnageIsFavorite}
                    isFavorite={isFavorite} />
            ))}
        </div>
    );
}

export default FilmsList