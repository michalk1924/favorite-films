import React, { useEffect, useState } from 'react'
import getAllFilms from '../../service'
import Film from '../film/Film.jsx'

function FilmsList() {

    const [films, setFilms] = useState([]);

    useEffect(() => {

        const fetchFilms = async () => {
            const fetchedFilms = await getAllFilms();
            setFilms(fetchedFilms);
        };

        fetchFilms();

    }, []);


    return (
        <div>
            {films?.map(film => (
                <Film film={film} />
            ))}
        </div>
    );
}

export default FilmsList