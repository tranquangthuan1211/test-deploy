import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import requests from '../requests/requests';
import styles from './banner.scss';

const cx = classNames.bind(styles);

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        fetch(requests.fetchNetflixOriginals)
            .then((res) => res.json())
            .then((res) => setMovies(res.results[Math.floor(Math.random() * res.results.length)]))
            .catch(() => console.log('error'));
    }, []);
    return (
        <header
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: 'centre centre',
            }}
            className={cx('banner')}
        >
            <div className={cx('banner_content')}>
                <h1 className={'banner_title'}>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className={cx('banner_buttons')}>
                    <button className={cx('banner_button')}>Play</button>
                    <button className={cx('banner_button')}>My List</button>
                </div>
                <h3 className={cx('description')}>{movie?.overview}</h3>
            </div>
            {/*  */}
        </header>
    );
}

export default Banner;
