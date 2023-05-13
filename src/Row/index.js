import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './row.module.scss';

const cx = classNames.bind(styles);
const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((res) => setMovies(res.results))
            .catch(() => {
                console.log('error');
            });
    }, [fetchUrl]);
    return (
        <div className={cx('row')}>
            <h2>{title}</h2>

            <div className={cx('row_posters')}>
                {movies.map((movie) => (
                    <img
                        key={movies.id}
                        className={cx('row_poster', `${isLargeRow && 'row_posterLarge'}`)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
